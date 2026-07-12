import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Layers3,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at Vertex, where design, engineering, and product thinking come together.",
};

const reasons = [
  {
    title: "Real product work",
    icon: Rocket,
  },
  {
    title: "Modern tech stack",
    icon: Layers3,
  },
  {
    title: "Growth-focused culture",
    icon: Users,
  },
  {
    title: "Flexible collaboration",
    icon: Sparkles,
  },
];

const positions = [
  "Frontend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Business Development Executive",
];

const hiringProcess = [
  "Apply",
  "Intro call",
  "Technical/project discussion",
  "Final decision",
];

export default function CareersPage() {
  const email = "faysal.malick@icloud.com";

  return (
    <main>
      <section className="premium-shell premium-mesh relative pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="container relative z-10 mx-auto max-w-6xl px-4 text-center">
          <div className="premium-badge mx-auto w-fit">
            <BriefcaseBusiness className="h-4 w-4" />
            Careers at Vertex
          </div>
          <h1 className="premium-heading mx-auto mt-7 max-w-4xl">
            Build Your Career at Vertex
          </h1>
          <p className="premium-copy mx-auto mt-6 max-w-3xl">
            Join a digital solutions agency where design, engineering, and
            product thinking come together.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-section dark:bg-darkmode">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(139,92,246,0.12),transparent_30rem),radial-gradient(circle_at_82%_46%,rgba(34,211,238,0.10),transparent_28rem)]" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <span className="premium-badge">Why join Vertex</span>
            <h2 className="premium-heading mt-6">
              Work where craft and momentum meet.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="glass-card group rounded-[1.75rem] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-Sky-blue-mist group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-midnight_text dark:text-white">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white dark:bg-darklight">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 lg:grid-cols-2">
          <div>
            <span className="premium-badge">Open positions</span>
            <h2 className="premium-heading mt-6">
              Roles we are always excited to meet.
            </h2>
            <div className="mt-8 grid gap-4">
              {positions.map((position) => (
                <article
                  key={position}
                  className="glass-card group flex items-center justify-between gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-Sky-blue-mist/30"
                >
                  <div>
                    <h3 className="text-lg font-black text-midnight_text dark:text-white">
                      {position}
                    </h3>
                    <p className="mt-1 text-sm text-secondary dark:text-white/55">
                      Future opening / talent pipeline
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>

          <div>
            <span className="premium-badge">Hiring process</span>
            <h2 className="premium-heading mt-6">
              Clear, focused, and respectful of your time.
            </h2>
            <div className="mt-8 space-y-4">
              {hiringProcess.map((step, index) => (
                <div
                  key={step}
                  className="glass-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-Sky-blue-mist text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="text-base font-bold text-midnight_text dark:text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-section dark:bg-darkmode">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.24),transparent_28rem),radial-gradient(circle_at_75%_60%,rgba(34,211,238,0.14),transparent_26rem)]" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <div className="glass-card rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
            <CheckCircle2 className="mx-auto mb-6 h-12 w-12 text-success" />
            <h2 className="text-3xl font-black text-midnight_text dark:text-white sm:text-4xl">
              Think you can build with us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-secondary dark:text-white/65">
              Send your CV and a short note about the kind of work you want to
              do at Vertex.
            </p>
            <Link
              href={`mailto:${email}?subject=Career%20Application%20at%20Vertex`}
              className="premium-gradient-button mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold hover:-translate-y-1"
            >
              Send Your CV
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
