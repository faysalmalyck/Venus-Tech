import React from 'react';
import { Globe, Cloud, Brain, GraduationCap, TrendingUp, Users, Sparkles, UserCheck } from 'lucide-react';

export default function SoftwareSolutions() {
  const solutions = [
    {
      title: "Custom Business Websites",
      description: "High performance, SEO friendly websites that strengthen your brand and convert visitors into customers.",
      icon: Globe,
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      lineColor: "bg-blue-500",
      stats: {
        text: "40+ Projects Delivered",
        icon: TrendingUp,
      }
    },
    {
      title: "SaaS Application Development",
      description: "Secure, scalable SaaS platforms with intuitive UX, robust backend and seamless integrations.",
      icon: Cloud,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      lineColor: "bg-purple-500",
      stats: {
        text: "25+ SaaS Platforms",
        icon: Users,
      }
    },
    {
      title: "AI & Automation Solutions",
      description: "AI powered workflows, LLMs, intelligent assistants and business automation to boost productivity.",
      icon: Brain,
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      lineColor: "bg-emerald-500",
      stats: {
        text: "AI Solutions Delivered",
        icon: Sparkles,
      }
    },
    {
      title: "EdTech Solutions",
      description: "Interactive learning platforms, LMS, virtual classrooms and educational apps built for scale.",
      icon: GraduationCap,
      iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      lineColor: "bg-amber-500",
      stats: {
        text: "15+ EdTech Projects",
        icon: UserCheck,
      }
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-section px-4 py-20 dark:bg-darkmode sm:px-6 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(139,92,246,0.10),transparent_30rem),radial-gradient(circle_at_88%_40%,rgba(34,211,238,0.08),transparent_26rem)]" />
      <div className="relative mx-auto w-full max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-16 max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="premium-badge w-fit">
              <span className="h-2 w-2 rounded-full bg-success"></span>
              <span>Software Solution</span>
            </div>
          <h2 className="py-8 text-3xl font-extrabold tracking-tight text-midnight_text dark:text-white sm:text-5xl sm:leading-[1.15]">
  Software Solutions built arround your {" "}
  <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text font-black text-transparent">
    Business.
  </span>
</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-secondary dark:text-slate-300">
            We deliver end-to-end software development services designed to solve complex business challenges and support sustainable growth.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => {
            const IconComponent = item.icon;
            const StatsIcon = item.stats.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="1000"
                className="glass-card group relative flex min-h-[360px] flex-col justify-between rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.28)]"
              >
                <div>
                  {/* Top Icon Block */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.iconColor} mb-8 transition-transform duration-500 group-hover:scale-105`}>
                    <IconComponent className="w-7 h-7 stroke-[1.75]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="mb-3 text-2xl font-black leading-snug tracking-wide text-midnight_text dark:text-white">
                    {item.title}
                  </h3>

                  {/* Accent Highlight Line */}
                  <div className={`w-8 h-[3px] ${item.lineColor} rounded-full mb-6`} />

                  {/* Card Description */}
                  <p className="mb-8 text-sm font-medium leading-relaxed text-secondary dark:text-slate-300">
                    {item.description}
                  </p>
                </div>

                {/* Footnote Stats Box */}
                <div className="mt-auto flex items-center space-x-3 rounded-xl border border-slate-200 bg-white/70 px-4 py-3.5 transition-colors duration-300 group-hover:bg-white dark:border-slate-800 dark:bg-[#111726]/40 dark:group-hover:bg-[#151d30]/60">
                  <StatsIcon className={`w-5 h-5 ${item.iconColor.split(' ')[0]}`} />
                  <span className="text-xs font-bold tracking-wide text-slate-700 dark:text-slate-300">
                    {item.stats.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
