"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const INTRO_STORAGE_KEY = "vertex-intro-seen-v1";
const INTRO_DURATION = 2800;

const orbitItems = ["Strategy", "Design", "Engineering", "Growth"];

const IntroAnimation = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(false);
      return;
    }

    let shouldShow = false;

    try {
      shouldShow = window.localStorage.getItem(INTRO_STORAGE_KEY) !== "true";
    } catch {
      shouldShow = false;
    }

    if (!shouldShow) {
      setVisible(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const introDuration = prefersReducedMotion ? 900 : INTRO_DURATION;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, introDuration - 300);

    const doneTimer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(INTRO_STORAGE_KEY, "true");
        document.documentElement.dataset.vertexIntro = "seen";
      } catch {
        // Browsers can block storage in private contexts. The intro still closes normally.
      }
      setVisible(false);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    }, introDuration);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [pathname]);

  const closeIntro = () => {
    try {
      window.localStorage.setItem(INTRO_STORAGE_KEY, "true");
      document.documentElement.dataset.vertexIntro = "seen";
    } catch {
      // Ignore storage failures; the user action should still close the intro.
    }
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 260);
  };

  if (pathname !== "/" || !visible) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Vertex Solution intro animation"
      className={`vertex-intro-overlay fixed inset-0 z-[2000] flex min-h-dvh items-center justify-center overflow-hidden bg-white px-4 py-8 text-midnight_text transition-opacity duration-500 dark:bg-[#070A12] dark:text-white sm:px-6 lg:px-10 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(139,92,246,0.20),transparent_22rem),radial-gradient(circle_at_50%_70%,rgba(34,211,238,0.14),transparent_24rem),linear-gradient(180deg,rgba(248,250,252,0.98),rgba(247,245,255,0.96))] dark:bg-[radial-gradient(circle_at_50%_28%,rgba(139,92,246,0.24),transparent_22rem),radial-gradient(circle_at_50%_70%,rgba(34,211,238,0.18),transparent_24rem),linear-gradient(180deg,#070A12,#101827)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-Sky-blue-mist/40 to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[min(72vw,42rem)] -translate-x-1/2 -translate-y-1/2 sm:block">
        <div className="intro-orbit absolute inset-0 rounded-full border border-slate-950/[0.06] dark:border-white/[0.07]" />
        <div className="intro-orbit intro-orbit-secondary absolute inset-[12%] rounded-full border border-slate-950/[0.05] dark:border-white/[0.06]" />
        {orbitItems.map((item, index) => (
          <span
            key={item}
            className={`intro-orbit-label absolute rounded-full border border-slate-950/10 bg-white/70 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07] dark:text-white/50 ${
              index === 0
                ? "left-1/2 top-0 -translate-x-1/2"
                : index === 1
                  ? "right-0 top-1/2 -translate-y-1/2"
                  : index === 2
                    ? "bottom-0 left-1/2 -translate-x-1/2"
                    : "left-0 top-1/2 -translate-y-1/2"
            }`}
            style={{ animationDelay: `${450 + index * 90}ms` }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="intro-brand-lockup mb-8 flex items-center gap-4 rounded-[1.75rem] border border-slate-950/10 bg-white/70 px-5 py-4 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_28px_100px_rgba(0,0,0,0.42)] sm:gap-5 sm:px-6">
          <div className="intro-mark flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-Sky-blue-mist shadow-[0_18px_50px_rgba(139,92,246,0.32)] sm:h-14 sm:w-14">
            <span className="text-2xl font-black text-white sm:text-3xl">V</span>
          </div>
          <div className="text-left">
            <p className="text-xl font-black leading-none text-midnight_text dark:text-white sm:text-2xl">
              Vertex
            </p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-secondary dark:text-white/50 sm:text-xs">
              Digital Solutions Agency
            </p>
          </div>
        </div>

        <p className="intro-kicker mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary dark:text-Sky-blue-mist sm:text-xs">
          Product strategy / UI systems / Engineering
        </p>

        <h1 className="intro-title-fill max-w-full text-[clamp(2.35rem,11vw,6.5rem)] font-black leading-none tracking-normal">
          Vertex Solution
        </h1>

        <div className="intro-progress mt-8 h-1 w-full max-w-xs overflow-hidden rounded-full bg-slate-950/10 dark:bg-white/10 sm:max-w-md">
          <div className="h-full rounded-full bg-gradient-to-r from-primary via-Sky-blue-mist to-success" />
        </div>

        <p className="intro-copy mt-6 max-w-xl text-sm leading-7 text-secondary dark:text-white/65 sm:text-base">
          A premium digital product studio for high-performance web, SaaS, and AI platforms.
        </p>
      </div>

      <button
        type="button"
        onClick={closeIntro}
        className="absolute right-4 top-4 z-20 rounded-full border border-slate-950/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/[0.07] dark:text-white/60 dark:hover:text-white sm:right-6 sm:top-6"
      >
        Skip
      </button>
    </div>
  );
};

export default IntroAnimation;
