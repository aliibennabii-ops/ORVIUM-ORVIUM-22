import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Search, LineChart, Cpu, Code2, RefreshCw, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    <Search className="w-5 h-5 text-[#E6E5E4]" />,
    <LineChart className="w-5 h-5 text-[#E6E5E4]" />,
    <Cpu className="w-5 h-5 text-[#E6E5E4]" />,
    <Code2 className="w-5 h-5 text-[#E6E5E4]" />,
    <RefreshCw className="w-5 h-5 text-[#E6E5E4]" />,
  ];

  return (
    <section id="process" className="py-24 bg-[#1E2B37] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#E6E5E4]/70 mb-3">
            {t.process.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-4">
            {t.process.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.process.description}
          </p>
        </div>

        {/* Step Progression Timeline (Desktop & Mobile) */}
        <div className="relative mb-12">
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-[#E6E5E4]/20 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {t.process.steps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`text-start p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#2B3B4A] border-[#E6E5E4] shadow-xl scale-[1.02]'
                      : 'bg-[#23313E]/70 border-[#E6E5E4]/15 hover:border-[#E6E5E4]/35 hover:bg-[#23313E]'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#E6E5E4] text-[#516B84]'
                          : 'bg-[#1E2B37] text-[#E6E5E4]/70'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-[#1E2B37]/60 border border-[#E6E5E4]/15">
                      {stepIcons[index]}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#E6E5E4] font-serif mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#E6E5E4]/70 line-clamp-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Spotlight Card for the Active Step */}
        <div className="bg-[#2B3B4A] border border-[#E6E5E4]/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Explanation (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#E6E5E4]">
                  {t.process.steps[activeStep].number}
                </span>
                <div className="h-6 w-[1.5px] bg-[#E6E5E4]/30" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#E6E5E4] font-serif">
                  {t.process.steps[activeStep].title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#E6E5E4]/90 leading-relaxed font-light">
                {t.process.steps[activeStep].detail}
              </p>

              {/* Concrete Deliverable */}
              <div className="p-4 rounded-xl bg-[#516B84]/40 border border-[#E6E5E4]/30">
                <div className="text-xs font-mono font-semibold text-[#E6E5E4] uppercase mb-1">
                  Tangible Deliverable:
                </div>
                <div className="text-sm font-semibold text-[#E6E5E4] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E6E5E4] shrink-0" />
                  <span>{t.process.steps[activeStep].deliverable}</span>
                </div>
              </div>
            </div>

            {/* Step Visualizer Node Graphic (5 cols) */}
            <div className="lg:col-span-5 bg-[#1E2B37] border border-[#E6E5E4]/20 rounded-2xl p-6 text-center">
              <div className="text-xs font-mono text-[#E6E5E4]/60 mb-4 pb-2 border-b border-[#E6E5E4]/15">
                STAGE PROGRESSION // 0{activeStep + 1} OF 05
              </div>
              <div className="py-6 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#E6E5E4] flex items-center justify-center bg-[#516B84]/50 shadow-inner mb-4">
                  {stepIcons[activeStep]}
                </div>
                <div className="text-sm font-semibold text-[#E6E5E4] font-serif mb-1">
                  {t.process.steps[activeStep].title}
                </div>
                <div className="text-xs text-[#E6E5E4]/70 max-w-xs font-light">
                  {t.process.steps[activeStep].description}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
