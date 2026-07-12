import React from "react";
import Image from "next/image";
import { getImgPath } from "@/utils/image";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const Contactform = () => {
  const email = "faysal.malick@icloud.com";
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to discuss a project with you."
  );
  const whatsappLink = `https://wa.me/923055552772?text=${whatsappMessage}`;
  const checklist = [
    "Free project discussion",
    "Fast response",
    "Clear proposal",
  ];

  return (
    <section className="relative overflow-hidden bg-section dark:bg-darklight">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,92,246,0.22),transparent_34rem),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.12),transparent_28rem)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12">
          <div
            className="row-start-1 col-start-1 row-end-2 col-end-12 md:col-end-7"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
           <div>
  {/* Premium Badge */}
  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-white">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
    <span>build everything</span>
  </div>

  {/* Main Header */}
  <h2 className="py-8 text-3xl font-extrabold tracking-tight text-midnight_text dark:text-white sm:text-5xl sm:leading-[1.15]">
  Let&apos;s discuss your project and take it to the{" "}
  <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text font-black text-transparent">
    next level.
  </span>
</h2>

  {/* Contact Grid */}
  <div className="grid grid-cols-1 gap-4 border-b border-white/10 pb-12 sm:grid-cols-2">
    
    {/* Phone Card */}
    <div className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_8px_30px_rgb(139,92,246,0.14)]">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:scale-110 transition-transform duration-300">
        <Phone className="h-5 w-5" />
      </div>
      <span className="block text-xs font-medium uppercase tracking-wider text-secondary dark:text-white/40">Phone</span>
      <p className="mt-1 text-base font-medium text-midnight_text dark:text-white">
        +92-305-5552772
      </p>
    </div>

    {/* Email Card */}
    <div className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_8px_30px_rgb(139,92,246,0.14)]">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
        <Mail className="h-5 w-5" />
      </div>
      <span className="block text-xs font-medium uppercase tracking-wider text-secondary dark:text-white/40">Email</span>
      <p className="mt-1 break-all text-base font-medium text-midnight_text dark:text-white">
        faysal.malick@icloud.com
      </p>
    </div>

    {/* Address Card */}
    <div className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_8px_30px_rgb(139,92,246,0.14)] sm:col-span-2">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
        <MapPin className="h-5 w-5" />
      </div>
      <span className="block text-xs font-medium uppercase tracking-wider text-secondary dark:text-white/40">Address</span>
      <p className="mt-1 text-base font-medium leading-relaxed text-midnight_text dark:text-white">
        Office No. 194-A, Street No. 7, Sector I-10/3, Islamabad 44000, Pakistan
      </p>
    </div>

  </div>
</div>

            <div className="pt-12">
              <p className="pb-4 text-base text-secondary dark:text-white/50">Trusted by</p>
              <div className="flex flex-wrap items-center gap-7 md:gap-14">
                {[
                  ["/images/contact/google-pay.png", "Google-pay", "max-w-28 h-5"],
                  ["/images/contact/play-juction.png", "play-juction", "max-w-24 h-6"],
                  ["/images/contact/stripe.png", "stripe", "max-w-14 h-6"],
                  ["/images/contact/wise.png", "wise", "max-w-16 h-4"],
                ].map(([src, alt, className]) => (
                  <Image
                    key={src}
                    src={getImgPath(src)}
                    alt={alt}
                    width={100}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                    quality={100}
                    className={`w_f w-full opacity-80 transition-opacity duration-300 hover:opacity-100 ${className}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative row-start-2 col-start-1 row-end-2 col-end-13 md:row-start-1 md:col-start-8"
          >
            <div className="glass-card relative z-10 m-auto mt-8 max-w-[50rem] overflow-hidden rounded-[2rem] px-6 py-8 sm:px-9 lg:mt-0">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_32%)]" />
              <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-950/10 bg-white/70 text-Sky-blue-mist shadow-[0_18px_45px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-white/10">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h2 className="mb-3 text-3xl font-black text-midnight_text dark:text-white">
                Start the project
              </h2>
              <p className="mb-8 text-base leading-7 text-secondary dark:text-white/65">
                Have a project in mind? Send us your idea directly and we&apos;ll get back to you.
              </p>
              <div className="grid gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-gradient-button flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 font-bold hover:-translate-y-1"
                >
                  Chat on WhatsApp
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-950/10 bg-white/70 px-5 py-4 font-bold text-midnight_text backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-Sky-blue-mist/40 hover:bg-white hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:hover:text-Sky-blue-mist"
                >
                  Send Email
                  <Send className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 grid gap-3">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-950/10 bg-white/60 px-4 py-3 text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary/30 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white/75 dark:hover:bg-white/10"
                  >
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary dark:border-white/10 dark:bg-white/[0.06] dark:text-white/55">
                <span className="h-2 w-2 rounded-full bg-success" />
                Usually replies within 24 hours
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
