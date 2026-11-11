import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ShieldCheck, Target, Cpu, Wrench, Sparkles, RefreshCcw } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const pillarIcons = [
    <Wrench className="w-5 h-5 text-[#E6E5E4]" />,
    <Target className="w-5 h-5 text-[#E6E5E4]" />,
    <Cpu className="w-5 h-5 text-[#E6E5E4]" />,
    <Sparkles className="w-5 h-5 text-[#E6E5E4]" />,
    <ShieldCheck className="w-5 h-5 text-[#E6E5E4]" />,
    <RefreshCcw className="w-5 h-5 text-[#E6E5E4]" />,
  ];

  return (
    <section id="about" className="py-24 bg-[#1E2B37] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#E6E5E4]/70 mb-3">
            {t.about.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-6">
            {t.about.headline}
          </h2>
          <p className="text-lg sm:text-xl text-[#E6E5E4] font-serif leading-relaxed mb-4">
            "{t.about.manifesto}"
          </p>
          <p className="text-sm sm:text-base text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.about.mission}
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-[#2B3B4A]/60 border border-[#E6E5E4]/20 hover:border-[#E6E5E4]/40 transition-all hover:bg-[#2B3B4A]"
            >
              <div className="p-3 rounded-xl bg-[#516B84] border border-[#E6E5E4]/25 w-fit mb-5 shadow-sm">
                {pillarIcons[index]}
              </div>
              <h3 className="text-lg font-bold text-[#E6E5E4] mb-2 font-serif">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E6E5E4]/80 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Architectural Principles Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#23313E] border border-[#E6E5E4]/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#E6E5E4]/60 uppercase">
              Operational Standard
            </div>
            <div className="text-base sm:text-lg font-bold text-[#E6E5E4] font-serif">
              Less manual work. Smarter operations. Sustainable growth.
            </div>
          </div>
          <div className="text-xs font-mono text-[#E6E5E4]/70 px-4 py-2 rounded-lg bg-[#2B3B4A] border border-[#E6E5E4]/20">
            ENGINEERING INTEGRITY // ORVIUM
          </div>
        </div>

      </div>
    </section>
  );
};
