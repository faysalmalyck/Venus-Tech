import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative z-1 overflow-hidden border-t border-white/10 bg-darkmode px-4 font-sans sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.24),transparent_28rem),radial-gradient(circle_at_90%_80%,rgba(34,211,238,0.12),transparent_24rem)]" />
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-8">
          
          {/* Brand & CTA Column */}
          <div className="md:col-span-5 col-span-12 py-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-solid border-white/10 pr-0 md:pr-8">
            <div className="text-center md:text-start">
             <Link
  href="/"
  className="flex items-center transition-transform duration-300 hover:-translate-y-0.5"
>
  <Image
    src={getImgPath("/images/logo/logo-white.svg")}
    alt="Vertex logo"
    width={120}
    height={28}
    quality={100}
    priority
    className="h-8 w-auto transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 sm:h-9"
  />
</Link>
              <h2 className="text-white mt-8 mb-8 text-3xl sm:text-4xl leading-tight font-black tracking-tight max-w-sm mx-auto md:mx-0">
                Ready to Launch Your Next <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text font-black text-transparent">
                 Digital Product
              </span>
              </h2>
              <Link
                href="/contact"
                className="premium-gradient-button inline-block px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:-translate-y-1">
                Get Started
              </Link>
            </div>
          </div>

          {/* Support & Contact Column */}
          <div className="md:col-span-3 sm:col-span-6 col-span-12 py-20  flex flex-col items-center md:items-start justify-center md:border-r border-b sm:border-b-0 border-solid border-white/10 md:px-8">
            <div className="w-full max-w-xs">
              <span className="text-xs font-bold tracking-widest text-white/40 uppercase block mb-6">
                Support
              </span>
              
              <div className="space-y-6">
  {/* Phone Item */}
  <div className="space-y-6 py-4  gap-6">
  {/* Phone Item */}
  <div className="group relative transition-all duration-300 ease-out hover:translate-x-2">
    {/* Left accent border stays static in the margin while text moves */}
    <span className="absolute -left-4 top-0 h-full w-[2px] bg-white/10 transition-all duration-300 ease-out group-hover:bg-primary" />
    
    <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1.5 font-semibold font-mono">
      Phone
    </p>
    <Link
      href="tel:+(923) 0555 2772"
      className="inline-block text-base text-white/90 font-medium tracking-wide transition-colors duration-300 group-hover:text-primary"
    >
      +92 305 5552772
    </Link>
  </div>
  
  {/* Email Item */}
  <div className="group relative transition-all duration-300 ease-out hover:translate-x-2">
    {/* Left accent border stays static in the margin while text moves */}
    <span className="absolute -left-4 top-0 h-full w-[2px] bg-white/10 transition-all duration-300 ease-out group-hover:bg-primary" />
    
    <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1.5 font-semibold font-mono">
      Email
    </p>
    <Link
      href="mailto:faysal.malick@icloud.com"
      className="inline-block text-base text-white/90 font-medium tracking-wide break-all transition-colors duration-300 group-hover:text-primary"
    >
      faysal.malick@icloud.com
    </Link>
  </div>
</div>
</div>
              {/* Social Media Links */}
              <ul className="flex items-center justify-center md:justify-start gap-6 py-6">
                <li className="group">
                  <Link href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:-translate-y-1">
                    <svg width="18" height="18" viewBox="0 0 25 25" fill="#A3BBD1" className="transition-colors duration-300 group-hover:fill-white">
                      <path d="M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134C24.2065 22.9132 24.2065 22.9131 24.2065 22.9128V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z" />
                    </svg>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:-translate-y-1">
                    <svg width="16" height="16" viewBox="0 0 23 23" fill="#A3BBD1" className="transition-colors duration-300 group-hover:fill-white">
                      <path d="M21.3412 0H1.65878C0.742615 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.742615 23 1.65878 23H21.3412C22.2574 23 23 22.2574 23 21.3412V1.65878C23 0.742615 22.2574 0 21.3412 0V0ZM16.7508 8.96648C16.7559 9.07966 16.7583 9.19337 16.7583 9.3076C16.7583 12.7955 14.1034 16.8176 9.24812 16.8178H9.24829H9.24812C7.75745 16.8178 6.37031 16.3809 5.20216 15.6321C5.4087 15.6565 5.61892 15.6686 5.83177 15.6686C7.06853 15.6686 8.20667 15.2468 9.11019 14.5387C7.95468 14.5173 6.98044 13.7542 6.64423 12.7053C6.80514 12.7362 6.97061 12.7531 7.1403 12.7531C7.38123 12.7531 7.61461 12.7206 7.83641 12.6601C6.62861 12.4183 5.71877 11.3508 5.71877 10.0727C5.71877 10.0607 5.71877 10.05 5.71912 10.039C6.07481 10.2367 6.48156 10.3557 6.91463 10.3691C6.20589 9.89615 5.74 9.08773 5.74 8.17192C5.74 7.68831 5.87073 7.23523 6.09744 6.84515C7.39912 8.44233 9.34445 9.49273 11.5383 9.6031C11.493 9.40973 11.4696 9.20828 11.4696 9.00122C11.4696 7.54407 12.6518 6.36189 14.1095 6.36189C14.8688 6.36189 15.5546 6.68283 16.0362 7.19592C16.6376 7.0773 17.2023 6.8576 17.7124 6.55526C17.515 7.17136 17.0966 7.68831 16.5516 8.01522C17.0856 7.95135 17.5945 7.80974 18.0674 7.59952C17.7141 8.12893 17.2661 8.59394 16.7508 8.96648Z" />
                    </svg>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:-translate-y-1">
                    <svg width="16" height="16" viewBox="0 0 22 23" fill="#A3BBD1" className="transition-colors duration-300 group-hover:fill-white">
                      <path d="M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            
          </div>


</div>
          {/* Newsletter Column */}
          <div className="md:col-span-4 col-span-12 py-12 flex flex-col justify-center items-center md:items-end pl-0 md:pl-6">
            <div className="w-full max-w-sm text-center md:text-start">
              <span className="text-xl font-semibold text-white block mb-3 tracking-tight">
                Subscribe newsletter
              </span>
              <p className="text-white/50 text-sm pb-6 leading-relaxed">
                To be updated with all the latest trends and product releases.
              </p>
              <form className="flex w-full flex-col gap-2 rounded-3xl border border-white/10 bg-white/8 p-1.5 transition-all duration-300 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20 sm:flex-row sm:rounded-full">
                <input
                  type="email"
                  placeholder="Email address*"
                  required
                  className="min-w-0 w-full border-none bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder-white/30"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-gradient-to-r from-primary to-Sky-blue-mist px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:shadow-[0_14px_36px_rgba(34,211,238,0.24)]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10">
  <div className="container mx-auto flex max-w-6xl flex-col items-center px-4 py-10">
    <nav aria-label="Footer Navigation">
      <ul className="mb-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {footerLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="relative text-sm font-medium text-white/50 transition-all duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <p className="max-w-2xl text-center text-xs font-medium leading-6 tracking-wide text-white/40">
      © {new Date().getFullYear()} All rights reserved. Made &amp; Distributed by{' '}
      <Link
        href="https://www.facebook.com/share/195ipqLEym/?mibextid=wwXIfr"
        target="_blank"
        className="font-semibold text-white/70 transition-colors duration-300 hover:text-primary"
      >
        Faysal Mushtaq
      </Link>
    </p>
  </div>
</div>
    </footer>
  )
}

export default Footer
