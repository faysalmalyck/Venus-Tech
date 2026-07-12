import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: "Production Ready Solutions",
      description: "Built for reliability and performance",
      iconColor: "text-blue-400",
      bgColor: "hover:bg-blue-950/20",
      borderColor: "group-hover:border-blue-500/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Scalable Architecture",
      description: "Designed to grow with your business",
      iconColor: "text-purple-400",
      bgColor: "hover:bg-purple-950/20",
      borderColor: "group-hover:border-purple-500/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75L6.429 9.75 12 13.75l5.571-4L12 5.75zm0 12.5l-5.571-4L12 18.25l5.571-4-5.571 4z" />
        </svg>
      )
    },
    {
      title: "Agile Development Process",
      description: "Transparent, fast and collaborative",
      iconColor: "text-emerald-400",
      bgColor: "hover:bg-emerald-950/20",
      borderColor: "group-hover:border-emerald-500/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: "Long Term Support",
      description: "Ongoing support you can depend on",
      iconColor: "text-amber-400",
      bgColor: "hover:bg-amber-950/20",
      borderColor: "group-hover:border-amber-500/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6M3 10.5a8.25 8.25 0 0116.498-.567m-16.498.567a9.103 9.103 0 001.905 5.518l-1.062 1.062a1.5 1.5 0 000 2.122l1.062 1.062a1.5 1.5 0 002.122 0l1.062-1.062a9.103 9.103 0 005.518 1.905m-1.218-13.218l6 6m0 0v-4.5m0 4.5h-4.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header Layout Container */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-4">
        <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
  Why Leading Teams Trust Our Code
</h2>
        <p className="text-slate-450 text-base md:text-lg leading-relaxed text-slate-400">
          We combine transparent agile delivery loops with production-grade engineering principles to launch high-performance platforms that capture market value.
        </p>
      </div>

      {/* Grid Features Container */}
      <div className="bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group flex items-start space-x-4 p-6 md:p-8 transition-all duration-300 ${feature.bgColor}`}
            >
              <div className={`${feature.iconColor} p-2 rounded-xl bg-slate-900 border border-slate-800 transition-colors duration-300 ${feature.borderColor} shrink-0`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white text-base font-semibold tracking-wide mb-1.5 leading-snug group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}