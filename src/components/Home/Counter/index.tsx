"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { count } from "@/data/siteData";
import Image from 'next/image'

const parseCounterValue = (value: string) => {
  const match = value.trim().match(/^([^0-9.-]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)

  if (!match) {
    return { prefix: '', target: 0, suffix: value, decimals: 0 }
  }

  const [, prefix, numericValue, suffix] = match

  return {
    prefix,
    target: Number(numericValue),
    suffix,
    decimals: numericValue.includes('.') ? numericValue.split('.')[1].length : 0,
  }
}

const AnimatedMetric = ({ value, delay = 0 }: { value: string; delay?: number }) => {
  const metricRef = useRef<HTMLSpanElement | null>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)
  const parsedValue = useMemo(() => parseCounterValue(value), [value])

  useEffect(() => {
    const element = metricRef.current

    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setCurrentValue(parsedValue.target)
      setHasStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.45 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [parsedValue.target])

  useEffect(() => {
    if (!hasStarted) return

    let animationFrame = 0
    let timeoutId: ReturnType<typeof setTimeout>
    const duration = 1700

    timeoutId = setTimeout(() => {
      const startedAt = performance.now()

      const animate = (timestamp: number) => {
        const progress = Math.min((timestamp - startedAt) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)

        setCurrentValue(parsedValue.target * easedProgress)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCurrentValue(parsedValue.target)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrame)
    }
  }, [delay, hasStarted, parsedValue.target])

  return (
    <span ref={metricRef} aria-label={value}>
      {parsedValue.prefix}
      {currentValue.toFixed(parsedValue.decimals)}
      {parsedValue.suffix}
    </span>
  )
}

const Counter = ({ isColorMode }: { isColorMode: boolean }) => {
  return (
    <section
      className={`relative overflow-hidden ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {count.map((item, index) => (
            <div
              key={index}
              className='glass-card group flex min-h-64 flex-col items-center justify-center gap-4 rounded-[1.75rem] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_90px_rgba(47,115,242,0.18)]'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 dark:bg-white/10'>
                <Image
                  src={item.icon}
                  alt='icon'
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>
              <span className='text-3xl font-black tracking-tight text-midnight_text dark:text-white'>
                <AnimatedMetric value={item.value} delay={index * 120} />
              </span>
              <p className='text-base leading-7 text-grey text-center max-w-[17.8125rem] w-full dark:text-white/55'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
