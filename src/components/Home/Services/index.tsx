import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Servicebox = [
  {
    title: 'Web Development',
    description:
      'Modern marketing sites, dashboards, and web applications built for speed, clarity, and conversion.',
    icon: '/images/services/web.svg',
  },
  {
    title: 'Mobile App Development',
    description:
      'Responsive mobile experiences and product interfaces shaped around real user workflows.',
    icon: '/images/services/mobile.svg',
  },
  {
    title: 'SaaS Development',
    description:
      'Scalable software platforms with clean architecture, secure flows, and reliable delivery.',
    icon: '/images/services/saas.svg',
  },
  {
    title: 'AI Solutions',
    description:
      'Automation, intelligent assistants, and AI-enabled workflows for practical business outcomes.',
    icon: '/images/services/ai.svg',
  },
  {
    title: 'Performance Optimization',
    description:
      'Application audits, speed improvements, and technical cleanup for smoother customer experiences.',
    icon: '/images/services/performance.svg',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing updates, monitoring, bug fixes, and product care after launch.',
    icon: '/images/services/maintenance.svg',
  },
]

const Services = () => {
  return (
    <section
      id='services'
      className='relative overflow-hidden bg-section py-24 dark:bg-darklight'
    >
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.16),transparent_32rem),radial-gradient(circle_at_80%_35%,rgba(34,211,238,0.08),transparent_24rem)]' />
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='premium-badge mx-auto w-fit'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <span className='h-2 w-2 rounded-full bg-success'></span>
          <span>
            Our Services
          </span>
        </div>

        <h2
          className='premium-heading mx-auto mt-6 mb-16 max-w-3xl text-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          Services specifically designed to meet your business needs
        </h2>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 150}
              data-aos-duration='1000'
              className='group transform-gpu will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3'
            >
              <div className='glass-card relative flex h-full min-h-[420px] flex-col items-start overflow-hidden rounded-[1.75rem] px-8 py-10 text-left transition-[box-shadow,border-color,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/25 hover:shadow-[0_35px_90px_rgba(47,115,242,0.16)]'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-Sky-blue-mist/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100'></div>

                <div className='relative z-10 flex flex-1 flex-col items-start'>
                  <div className='mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:rotate-3 dark:bg-white/10'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      className='h-10 w-10 object-contain'
                    />
                  </div>

                  <h3 className='mb-4 text-2xl font-black text-midnight_text dark:text-white'>
                    {item.title}
                  </h3>

                  <p className='mb-8 text-base leading-7 text-gray-600 dark:text-white/60'>
                    {item.description}
                  </p>

                  <Link
                    href='#'
                    className='mt-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:border-Sky-blue-mist/50 hover:bg-gradient-to-r hover:from-primary hover:to-Sky-blue-mist hover:text-white hover:shadow-[0_18px_45px_rgba(139,92,246,0.25)]'
                  >
                    Get Started

                    <ArrowRight className='h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
