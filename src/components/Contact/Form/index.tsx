import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { CheckCircle2, Mail, MessageCircle, Send, Sparkles } from 'lucide-react'

const ContactForm = () => {
  const email = 'faysal.malick@icloud.com'
  const whatsappMessage = encodeURIComponent(
    'Hi, I want to discuss a project with you.'
  )
  const whatsappLink = `https://wa.me/923055552772?text=${whatsappMessage}`
  const checklist = [
    'Free project discussion',
    'Fast response',
    'Clear proposal',
  ]

  return (
    <>
      <section className='relative overflow-hidden dark:bg-darkmode md:pb-24 pb-16'>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.10),transparent_28rem),radial-gradient(circle_at_85%_70%,rgba(34,211,238,0.08),transparent_24rem)]' />
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='relative grid md:grid-cols-12 grid-cols-1 gap-8 items-center'>
            <div className='col-span-6'>
              <div className='glass-card relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-9'>
                <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_32%)]' />
                <div className='relative'>
              <div className='mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-950/10 bg-white/70 text-Sky-blue-mist shadow-[0_18px_45px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-white/10'>
                <MessageCircle className='h-7 w-7' />
              </div>
              <h2 className='mb-3 text-3xl font-black leading-tight text-midnight_text dark:text-white sm:text-4xl'>
                Start the project
              </h2>
              <p className='mb-8 text-base leading-7 text-secondary dark:text-white/65'>
                Have a project in mind? Send us your idea directly and we&apos;ll get back to you.
              </p>
              <div className='grid gap-3'>
                <a
                  href={whatsappLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='premium-gradient-button flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 font-bold hover:-translate-y-1'
                >
                  Chat on WhatsApp
                  <MessageCircle className='h-5 w-5' />
                </a>
                <a
                  href={`mailto:${email}`}
                  className='flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-950/10 bg-white/70 px-5 py-4 font-bold text-midnight_text backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-Sky-blue-mist/40 hover:bg-white hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:hover:text-Sky-blue-mist'
                >
                  Send Email
                  <Send className='h-5 w-5' />
                </a>
              </div>

              <div className='mt-8 grid gap-3'>
                {checklist.map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-3 rounded-2xl border border-slate-950/10 bg-white/60 px-4 py-3 text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white/75 dark:hover:bg-white/10'
                  >
                    <CheckCircle2 className='h-5 w-5 text-success' />
                    {item}
                  </div>
                ))}
              </div>

              <p className='mt-7 inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary dark:border-white/10 dark:bg-white/[0.06] dark:text-white/55'>
                <span className='h-2 w-2 rounded-full bg-success' />
                Usually replies within 24 hours
              </p>
              </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='glass-card group relative overflow-hidden rounded-[2rem] p-3 shadow-[0_28px_100px_rgba(139,92,246,0.16)]'>
                <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.20),transparent_34%)]' />
                <div className='relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#070A12] sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[1/1]'>
                  <Image
                    src={getImgPath('/images/contact-page/contact.jpg')}
                    alt='Vertex consultation workspace'
                    width={1300}
                    height={980}
                    quality={100}
                    className='h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#070A12]/88 via-[#070A12]/28 to-transparent' />
                  <div className='absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-Sky-blue-mist/14 opacity-80' />

                  <div className='absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur-xl'>
                    <Sparkles className='h-4 w-4 text-success' />
                    Project desk
                  </div>

                  <div className='absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur-2xl'>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-Sky-blue-mist'>
                      Direct consultation
                    </p>
                    <h3 className='mt-2 text-2xl font-black leading-tight text-white'>
                      Share the idea. We shape the launch plan.
                    </h3>
                    <div className='mt-5 grid grid-cols-2 gap-3'>
                      <div className='rounded-2xl border border-white/10 bg-white/10 p-3'>
                        <MessageCircle className='mb-2 h-5 w-5 text-success' />
                        <p className='text-xs font-bold text-white'>WhatsApp first</p>
                      </div>
                      <div className='rounded-2xl border border-white/10 bg-white/10 p-3'>
                        <Mail className='mb-2 h-5 w-5 text-Sky-blue-mist' />
                        <p className='text-xs font-bold text-white'>Email ready</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
