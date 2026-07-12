import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const offices = [
  {
    title: 'Islamabad I',
    tag: 'Headquarters',
    address: 'Office No. 101, First Floor, Al-Qadir Heights, Main Jinnah Avenue, Blue Area, Islamabad, Pakistan',
    email: 'faysal.malick@icloud.com',
    phone: '+923055552772',
    displayPhone: '+(92) 305 555 2772',
    map: 'https://maps.google.com/?q=Blue+Area+Islamabad',
  },
  {
    title: 'Islamabad II',
    tag: 'Regional Office',
    address: 'Office No. 194-A, Street No. 7, Sector I-10/3, Islamabad 44000, Pakistan',
    email: 'barkatullahkhan@gmail.com',
    phone: '+923406087431',
    displayPhone: '+(92) 340 608 7431',
    map: 'https://maps.google.com/?q=I-10/3+Islamabad',
  },
]

const Location = () => {
  return (
    <section className="relative overflow-hidden bg-section py-24 dark:bg-[#070A12] lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(34,211,238,0.10),transparent_28rem)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:border-white/10 dark:bg-white/5 dark:text-Sky-blue-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Our Network
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-midnight_text dark:text-white sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-Sky-blue-mist to-primary bg-clip-text text-transparent dark:from-white dark:via-Sky-blue-mist dark:to-primary">
              Offices
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-secondary dark:text-slate-300/70">
            Connect with our teams on the ground. We build products that scale globally from the heart of Islamabad.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {offices.map((office) => (
            <div
              key={office.title}
              className="glass-card group relative rounded-3xl p-6 transition-all duration-500 hover:border-primary/25 hover:bg-white/90 dark:hover:border-white/20 dark:hover:bg-white/[0.06] sm:p-8"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-950/10 bg-white/70 text-Sky-blue-mist transition-all duration-500 group-hover:border-Sky-blue-mist/40 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-Sky-blue-mist group-hover:text-white dark:border-white/10 dark:bg-white/5">
                    <Icon icon="solar:map-point-bold-duotone" width={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-midnight_text transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-Sky-blue-mist">
                      {office.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/70 dark:text-Sky-blue-mist/60">
                      {office.tag}
                    </p>
                  </div>
                </div>

                <Link
                  href={office.map}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-950/10 text-primary transition-all duration-300 hover:border-Sky-blue-mist/50 hover:text-Sky-blue-mist dark:border-white/10 dark:text-Sky-blue-mist/80 dark:hover:text-white"
                >
                  <Icon icon="solar:arrow-right-up-linear" width={18} />
                </Link>
              </div>

              <div className="space-y-5 border-y border-slate-950/10 py-6 dark:border-white/10">
                <div className="flex items-start gap-4">
                  <Icon
                    icon="solar:map-point-line-duotone"
                    width={20}
                    className="mt-1 flex-shrink-0 text-Sky-blue-mist/60"
                  />
                  <p className="text-sm leading-6 text-secondary dark:text-slate-200/80">
                    {office.address}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Icon
                    icon="solar:letter-line-duotone"
                    width={20}
                    className="flex-shrink-0 text-Sky-blue-mist/60"
                  />
                  <Link
                    href={`mailto:${office.email}`}
                    className="truncate text-sm text-secondary underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline dark:text-slate-200/80 dark:hover:text-white dark:decoration-white/30"
                  >
                    {office.email}
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <Icon
                    icon="solar:phone-calling-line-duotone"
                    width={20}
                    className="flex-shrink-0 text-Sky-blue-mist/60"
                  />
                  <Link
                    href={`tel:${office.phone}`}
                    className="text-sm text-secondary underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline dark:text-slate-200/80 dark:hover:text-white dark:decoration-white/30"
                  >
                    {office.displayPhone}
                  </Link>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`mailto:${office.email}`}
                  className="premium-gradient-button inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold"
                >
                  <Icon icon="solar:letter-bold" width={16} />
                  Email Us
                </Link>

                <Link
                  href={`tel:${office.phone}`}
                  className="inline-flex min-w-[120px] flex-1 items-center justify-center gap-2 rounded-xl border border-slate-950/10 bg-white/70 px-5 py-3 text-xs font-semibold text-primary transition-all duration-300 hover:border-Sky-blue-mist/40 hover:bg-white hover:text-Sky-blue-mist dark:border-white/10 dark:bg-white/5 dark:text-Sky-blue-mist dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <Icon icon="solar:phone-bold" width={16} />
                  Call Direct
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Location
