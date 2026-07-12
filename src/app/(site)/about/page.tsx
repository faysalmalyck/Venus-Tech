import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import { coreValues } from "@/app/(site)/about/Our Core Values/CoreValue"; 
import Counter from "./Our work Count";
import TeamPage from "./Our Team/page";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Vertex, a premium digital solutions agency for modern software and product delivery.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      <HeroSub
        title="About us"
        description="Founded in 2022, Vertex is a software development company focused on building secure, scalable, and high performance digital solutions. We help startups and businesses transform ideas into reliable web, mobile, and cloud applications.Driven by innovation, collaboration, and engineering excellence, we deliver technology that solves real business challenges and supports long term growth."
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* Core Values Section matching default application container shell */}
      <section className="premium-shell premium-mesh relative overflow-hidden py-20 lg:py-28">
        {/* Ambient Aura matches Hero alignment */}
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="pointer-events-none absolute top-12 left-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl font-black text-midnight_text dark:text-white sm:text-4xl lg:text-5xl tracking-tight">
              Our Core Values
            </h2>
            <p className="premium-copy mt-4 text-sm sm:text-base text-secondary dark:text-white/60 leading-relaxed">
              We align deep performance standards with uncompromised software parameters to output pure client execution.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <article
                  key={value.title}
                  className="glass-card group relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/25 hover:bg-white/90 dark:hover:border-white/15 dark:hover:bg-white/[0.08] lg:p-8"
                >
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div>
                      {/* Icon Base */}
                      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-950/10 bg-white/70 ${value.color} transition-transform duration-500 group-hover:scale-110 group-hover:border-primary/20 dark:border-white/5 dark:bg-white/[0.03] dark:group-hover:border-white/10`}>
                        <IconComponent className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-midnight_text dark:text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-secondary transition-colors duration-300 group-hover:text-slate-700 dark:text-white/60 dark:group-hover:text-white/80">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom Architectural Accent Line */}
                    <div className="mt-8 h-px w-8 bg-slate-950/10 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-primary dark:bg-white/10" />
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>
      <Counter isColorMode/>
      <TeamPage />
    </>
  );
};

export default page;
