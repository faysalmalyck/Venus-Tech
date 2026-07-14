'use client'

import React from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from "@/data/siteData"
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
      className={`scroll-mt-25 relative overflow-hidden py-28 lg:py-36 ${
        isColorMode
          ? 'bg-section dark:bg-darklight'
          : 'bg-white dark:bg-darkmode'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[140px] dark:bg-primary/[0.07]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-Sky-blue-mist/[0.04] blur-[140px] dark:bg-Sky-blue-mist/[0.07]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-20">
          
          <div
            className="lg:col-span-7"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="premium-badge w-fit">
              <span className="h-2 w-2 rounded-full bg-success"></span>
              <span>Capability System</span>
            </div>

            <h2 className="py-8 text-3xl font-extrabold tracking-tight text-midnight_text dark:text-white sm:text-5xl sm:leading-[1.15]">
              End-to-end solution for your {" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text font-black text-transparent">
                Business.
              </span>
            </h2>

            <p className="premium-copy text-left text-lg leading-relaxed text-gray-600 dark:text-white/60 max-w-2xl">
              Every solution we deliver is engineered for precision performance, predictable scalability, and intuitive interface layouts, enabling growth engines to scale metrics systematically.
            </p>

            <div className="mt-12 space-y-4 max-w-2xl">
              {progressValues.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-in"
                  data-aos-duration="600"
                  className="group"
                >
                  <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 px-6 py-5 transition-all duration-300 ease-out hover:border-primary/25 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      
                      <div className="flex flex-1 items-center justify-between sm:justify-start sm:gap-4">
                        <h4 className="text-base font-bold tracking-tight text-midnight_text dark:text-white transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </h4>
                        
                        <div className="flex items-center gap-1.5 sm:ml-auto">
                          <span className="text-sm font-black text-primary/90 dark:text-white/80">
                            {item.Progress}%
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-all duration-300 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                        </div>
                      </div>

                      <div className="relative h-2.5 w-full rounded-full bg-slate-100 sm:w-48 lg:w-56 dark:bg-slate-900/60 ring-1 ring-inset ring-black/5 dark:ring-white/5">
                        <div
                          className="relative h-full rounded-full bg-gradient-to-r from-primary via-Sky-blue-mist to-success transition-[width] duration-700 ease-out will-change-[width]"
                          style={{ width: `${item.Progress}%` }}
                        >
                          <div className="absolute inset-0 overflow-hidden rounded-full">
                            <div className="absolute -left-full h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 [transform:translateZ(0)]" />
                          </div>
                          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 sticky top-36">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-primary/10 to-Sky-blue-mist/10 opacity-60 blur-md transition-all duration-700 group-hover:opacity-100" />
              
              <div className="glass-card relative overflow-hidden rounded-[2.75rem] border border-white/20 p-4 dark:border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-Sky-blue-mist/[0.08]" />
                
                <div className="overflow-hidden rounded-[2.25rem] bg-slate-900/5 dark:bg-black/20">
                  <Image
                    src={getImgPath('/images/work-progress/progress-work.png')}
                    alt="Work Progress Architecture"
                    width={650}
                    height={520}
                    quality={100}
                    style={{ width: '100%', height: 'auto' }}
                    className="relative z-10 transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/80 bg-white/70 p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-darkmode/60">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-sm font-black tracking-tight text-midnight_text dark:text-white">
                      Strategy to Shipped Product
                    </p>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-gray-600 dark:text-white/60">
                    Discovery, design systems, engineering, deployment, and iteration unified in a high-velocity execution loop.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProgressWork