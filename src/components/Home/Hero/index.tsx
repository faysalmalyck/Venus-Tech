'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Sparkles, Terminal, Activity } from 'lucide-react'
import { getImgPath } from '@/utils/image'

const terminalLines = [
  'SYSTEM: Initializing vertex-prod-cluster...',
  'NETWORK: Establishing multi-region routing... OK',
  'SECURE: TLS handshake completed with Edge node TLS_1.3',
  'COMPUTE: Synchronizing cluster token vectors...',
  'AI: Loading neural model pipelines... 100%',
  'MONITOR: Latency optimization stabilized at 14ms',
  'INFRA: Database replication scale complete.',
  'SYSTEM: All microservices operating within peak thresholds.'
]

const heroMetrics = [
  ['$32M+', 'SaaS Value'],
  ['99.9%', 'Uptime'],
  ['4.9/5', 'Rating'],
]

const parseMetricValue = (value: string) => {
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
  const parsedValue = useMemo(() => parseMetricValue(value), [value])

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
      { threshold: 0.65 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [parsedValue.target])

  useEffect(() => {
    if (!hasStarted) return

    let animationFrame = 0
    let timeoutId: ReturnType<typeof setTimeout>
    const duration = 1600

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

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        const nextLine = terminalLines[activeIndex]
        // Keep the view bounded to the last 5 logs for cleanliness
        const updated = [...prev, nextLine]
        if (updated.length > 5) updated.shift()
        return updated
      })
      setActiveIndex((prevIndex) => (prevIndex + 1) % terminalLines.length)
    }, 2200)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section className='premium-shell premium-mesh relative overflow-hidden pb-24 pt-28 text-white sm:pt-36 md:pb-32 md:pt-48'>
      {/* Background Lighting Elements */}
      <div className='pointer-events-none absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]' />
      <div className='pointer-events-none absolute right-5 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]' />
      
      {/* Micro Laser Grid Sub-Layer */}
      <div className='pointer-events-none absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent' />

      <div className='container relative z-10 mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-12 gap-y-16 md:gap-x-8 lg:gap-x-16 items-center'>
          
          {/* Left Block: Core Value Proposition */}
          <div
            className='col-span-12 md:col-span-7 lg:col-span-6 space-y-6 md:space-y-8 flex flex-col items-start justify-center'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            <div className='premium-badge flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium tracking-wide border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-full text-white/90'>
              <Sparkles className='h-3.5 w-3.5 text-cyan-400 animate-pulse' />
              <span>Next-Gen Engineering Studio</span>
            </div>

            <h1 className='text-midnight_text font-black dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight'>
              Engineering <span className='bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent'>intelligent</span> systems for world-class brands.
            </h1>

            <p className='premium-copy max-w-xl text-sm leading-relaxed text-secondary dark:text-white/70 sm:text-base md:text-lg'>
              We orchestrate high-performance SaaS platforms, secure cloud architectures, and tailored AI integrations optimized for mission-critical business scales.
            </p>

            <div className='flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row'>
              <Link
                href='/contact'
                className='premium-gradient-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-transform duration-300 hover:-translate-y-1 sm:px-8'
              >
                Start a Project
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                href='/portfolio'
                className='inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/10 bg-white/50 px-6 py-4 text-sm font-bold text-midnight_text shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white sm:px-8'
              >
                View portfolio
              </Link>
            </div>

            

            <div className='flex items-center gap-4 pt-3 border-t border-white/5 w-full max-w-xl'>
              <div className='flex items-center -space-x-3 isolate'>
                {[1, 2, 3].map((num) => (
                  <Image
                    key={num}
                    src={getImgPath(`/images/hero/hero-profile-${num}.jpg`)}
                    alt={`Vertex operator feedback avatar ${num}`}
                    width={40}
                    height={40}
                    quality={100}
                    className='h-9 w-9 rounded-full border-2 border-[#070A12] object-cover ring-1 ring-white/10'
                  />
                ))}
              </div>
              <div>
                <p className='max-w-xs text-xs font-medium leading-relaxed text-secondary dark:text-white/50'>
                  Trusted by ambitious founders and global operators deploying modern software models.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Live Terminal Simulator */}
          <div className='col-span-12 md:col-span-5 lg:col-span-6 relative flex flex-col items-center justify-center'>
            
            {/* Ambient Background Aura */}
            <div className='absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px] animate-pulse' />
            
            {/* The Glass Code Console Window */}
            <div className='w-full max-w-[440px] rounded-2xl border border-white/10 bg-[#070A12]/90 p-5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden min-h-[310px] flex flex-col justify-between group hover:border-primary/30 transition-colors duration-500'>
              
              {/* Window Controls Decorator */}
              <div className='flex items-center justify-between pb-4 border-b border-white/5'>
                <div className='flex items-center gap-2'>
                  <span className='h-3 w-3 rounded-full bg-rose-500/40 group-hover:bg-rose-500/80 transition-colors duration-300' />
                  <span className='h-3 w-3 rounded-full bg-amber-500/40 group-hover:bg-amber-500/80 transition-colors duration-300' />
                  <span className='h-3 w-3 rounded-full bg-emerald-500/40 group-hover:bg-emerald-500/80 transition-colors duration-300' />
                </div>
                <div className='flex items-center gap-1.5 font-mono text-[10px] text-white/40 tracking-wider uppercase'>
                  <Terminal className='h-3.5 w-3.5 text-primary' />
                  <span>Live Matrix Terminal</span>
                </div>
              </div>

              {/* Dynamic Console Feed */}
              <div className='font-mono text-xs space-y-2.5 py-4 flex-grow min-h-[160px] flex flex-col justify-end'>
                {visibleLines.length === 0 && (
                  <p className='text-white/30 animate-pulse'>Awaiting runtime logs...</p>
                )}
                {visibleLines.map((line, idx) => {
                  let colorClass = 'text-white/80'
                  if (line.startsWith('SYSTEM:')) colorClass = 'text-primary'
                  if (line.startsWith('SECURE:') || line.endsWith('OK') || line.endsWith('100%')) colorClass = 'text-emerald-400'
                  if (line.startsWith('NETWORK:')) colorClass = 'text-cyan-400'
                  if (line.startsWith('MONITOR:')) colorClass = 'text-amber-400'

                  return (
                    <div key={idx} className={`flex items-start gap-2 transition-all duration-300 transform translate-y-0 opacity-100 ${colorClass}`}>
                      <span className='text-white/30 shrink-0 select-none'>&gt;</span>
                      <p className='leading-relaxed tracking-tight break-all'>{line}</p>
                    </div>
                  )
                })}
                {/* Active Typing Cursor Simulator */}
                <div className='flex items-center gap-1 text-white/40'>
                  <span className='text-white/30'>&gt;</span>
                  <span className='h-3.5 w-2 bg-cyan-400 animate-[blink_1s_infinite]' />
                </div>
              </div>

              {/* Console Footprint Dashboard Meta */}
              <div className='pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40'>
                <div className='flex items-center gap-1.5'>
                  <Activity className='h-3.5 w-3.5 text-emerald-400 animate-pulse' />
                  <span>CLUSTER STATUS: SECURE</span>
                </div>
                <span>NODE: EP-09</span>
              </div>

            </div>

            {/* Performance Analytics Metric Banner Overlay */}
            <div className='mt-6 w-full max-w-[440px] grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-[#070A12]/90 p-4 text-center shadow-2xl backdrop-blur-xl z-20'>
              {heroMetrics.map(([value, label], index) => (
                <div key={label} className='space-y-0.5 border-r border-white/5 last:border-0'>
                  <p className='text-sm font-black tracking-tight text-white sm:text-lg'>
                    <AnimatedMetric value={value} delay={index * 140} />
                  </p>
                  <p className='text-[9px] font-bold uppercase tracking-widest text-secondary dark:text-white/40'>{label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
