'use client'

import React from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from "@/data/siteData";
import { getImgPath } from '@/utils/image'
import { ArrowUpRight } from 'lucide-react'

interface ProgressItem {
  title: string
  Progress: number
}

interface ProgressWorkProps {
  isColorMode: boolean
}

const ProgressWork = ({ isColorMode }: ProgressWorkProps) => {
  const progressValues = ProgressData as ProgressItem[]

  return (
    <section
      id="about"
      className={`scroll-mt-25 relative overflow-hidden ${
        isColorMode
          ? 'bg-section dark:bg-darklight'
          : 'bg-white dark:bg-darkmode'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="glass-card relative hidden overflow-hidden rounded-[2rem] p-5 md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-Sky-blue-mist/10" />
              <Image
                src={getImgPath('/images/work-progress/progress-work.png')}
                alt="Work Progress"
                width={650}
                height={520}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className="relative z-10"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-darkmode/75">
                <p className="text-sm font-bold text-midnight_text dark:text-white">Strategy to shipped product</p>
                <p className="mt-1 text-xs leading-5 text-secondary dark:text-white/55">Discovery, design systems, engineering, deployment, and iteration in one delivery loop.</p>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="premium-badge">
              <span className="h-2 w-2 rounded-full bg-success"></span>
              <span>Capability system</span>
            </div>

            <h2 className="premium-heading pb-6 pt-7">
              We Build Real Software That Solves Business Problems
            </h2>

            <p className="premium-copy">
              From SaaS platforms to custom dashboards, we help startups and
              businesses turn ideas into scalable, production ready systems.
            </p>

            <div className="space-y-3 pt-6">
  {progressValues.map((item, index) => (
    <div
      key={item.title}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group transition-all duration-500"
    >
      <div className="glass-card relative overflow-hidden rounded-xl border border-white/10 px-4 py-3 transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_16px_40px_rgba(59,130,246,0.12)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-2.5 flex items-center justify-between">
            <h4 className="text-sm font-semibold tracking-tight text-midnight_text dark:text-white">
              {item.title}
            </h4>

            <ArrowUpRight className="h-3.5 w-3.5 text-primary opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>

          {/* Progress Bar */}
          <div
            role="progressbar"
            aria-label={item.title}
            aria-valuenow={item.Progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative h-3 overflow-hidden rounded-full bg-slate-200/70 p-[1.5px] ring-1 ring-white/10 dark:bg-slate-900/80"
          >
            <div
              className="relative flex h-full min-w-[34px] items-center justify-end overflow-hidden rounded-full bg-gradient-to-r from-primary via-Sky-blue-mist to-success shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-1000 ease-out"
              style={{ width: `${Math.max(item.Progress, 12)}%` }}
            >
              {/* Shine */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute -left-1/2 h-full w-1/2 -skew-x-12 bg-white/20 animate-[shine_2.5s_linear_infinite]" />
              </div>

              {/* Gloss */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />

              {/* Percentage */}
              <span className="relative z-10 px-1.5 text-[8px] font-semibold text-white">
                {item.Progress}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgressWork
