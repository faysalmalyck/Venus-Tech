import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='premium-shell relative dark:bg-darkmode'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(139,92,246,0.16),transparent_34rem),radial-gradient(circle_at_82%_35%,rgba(34,211,238,0.08),transparent_24rem)]' />
      <div className='relative text-center lg:px-0 px-8'>
        <div
          className='premium-badge mx-auto w-fit'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='h-2 w-2 rounded-full bg-success'></span>
          <span>
            Portfolio
          </span>
        </div>
        <h2
          className='premium-heading text-center pt-7 pb-4 md:w-4/6 w-full m-auto'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Explore our portfolio showcase
        </h2>
        <div className='pb-14 inline-flex'>
          <p className='premium-copy max-w-2xl'>
            Dive into a curated collection of my finest work, showcasing
            expertise across various industries.
          </p>
        </div>
      </div>
      <PortfolioCard />
    </section>
  )
}

export default Portfolio
