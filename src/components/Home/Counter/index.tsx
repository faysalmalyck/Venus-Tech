import React from 'react'
import { count } from "@/data/siteData";
import Image from 'next/image'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
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
                {item.value}
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
