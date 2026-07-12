import React from "react";
import { count } from "@/data/siteData";
import Image from "next/image";

const Counter = ({ isColorMode }: { isColorMode: boolean }) => {
  return (
    <section
      className={`relative overflow-hidden py-20 lg:py-28 ${
        isColorMode
          ? "bg-section dark:bg-darklight"
          : "bg-white dark:bg-darkmode"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div
          className="mx-auto mb-16 max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-black leading-tight text-midnight_text dark:text-white md:text-5xl">
            Trusted through consistent results
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-grey dark:text-white/60">
            Delivering measurable outcomes through a commitment to quality, reliability, and long term client partnerships.
          </p>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {count.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
              className="glass-card group relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 p-6 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/30 hover:shadow-[0_35px_90px_rgba(47,115,242,0.2)]"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center gap-5">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-500 group-hover:bg-primary/15 dark:bg-white/10">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={32}
                    height={32}
                    unoptimized
                  />
                </div>

                {/* Counter */}
                <span className="text-3xl font-black tracking-tight text-midnight_text transition-colors duration-500 group-hover:text-primary dark:text-white">
                  {item.value}
                
                </span>

                {/* Description */}
                <p className="max-w-[16rem] text-center text-base leading-7 text-grey transition-colors duration-500 group-hover:text-midnight_text dark:text-white/55 dark:group-hover:text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
