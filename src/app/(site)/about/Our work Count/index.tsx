"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { count } from "@/data/siteData";
import Image from "next/image";

const parseCounterValue = (value: string) => {
  const match = value.trim().match(/^([^0-9.-]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

  if (!match) {
    return {
      prefix: "",
      target: 0,
      suffix: value,
      decimals: 0,
    };
  }

  const [, prefix, numericValue, suffix] = match;

  return {
    prefix,
    target: Number(numericValue),
    suffix,
    decimals: numericValue.includes(".") ? numericValue.split(".")[1].length : 0,
  };
};

const AnimatedMetric = ({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) => {
  const metricRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const parsedValue = useMemo(() => parseCounterValue(value), [value]);

  useEffect(() => {
    const element = metricRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCurrentValue(parsedValue.target);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [parsedValue.target]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrame = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const duration = 1700;

    timeoutId = setTimeout(() => {
      const startedAt = performance.now();

      const animate = (timestamp: number) => {
        const progress = Math.min((timestamp - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setCurrentValue(parsedValue.target * easedProgress);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCurrentValue(parsedValue.target);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrame);
    };
  }, [delay, hasStarted, parsedValue.target]);

  return (
    <span ref={metricRef} aria-label={value}>
      {parsedValue.prefix}
      {currentValue.toFixed(parsedValue.decimals)}
      {parsedValue.suffix}
    </span>
  );
};

const Counter = ({ isColorMode }: { isColorMode: boolean }) => {
  return (
    <section
      className={`relative overflow-hidden py-20 lg:py-28 ${
        isColorMode
          ? "bg-section dark:bg-darklight"
          : "bg-white dark:bg-darkmode"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div
          className="mx-auto mb-16 max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-black leading-tight text-midnight_text dark:text-white md:text-5xl">
            Trusted through consistent results
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-grey dark:text-white/60">
            Delivering measurable outcomes through a commitment to quality, reliability, and long term client partnerships.
          </p>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {count.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
              className="glass-card group relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 p-6 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/30 hover:shadow-[0_35px_90px_rgba(47,115,242,0.2)]"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center gap-5">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-500 group-hover:bg-primary/15 dark:bg-white/10">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={32}
                    height={32}
                    unoptimized
                  />
                </div>

                {/* Counter */}
                <span className="text-3xl font-black tracking-tight text-midnight_text transition-colors duration-500 group-hover:text-primary dark:text-white">
                  <AnimatedMetric value={item.value} delay={index * 120} />
                </span>

                {/* Description */}
                <p className="max-w-[16rem] text-center text-base leading-7 text-grey transition-colors duration-500 group-hover:text-midnight_text dark:text-white/55 dark:group-hover:text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
