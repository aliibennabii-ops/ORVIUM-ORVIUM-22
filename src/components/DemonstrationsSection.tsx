import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Layers, ArrowRight, CheckCircle2, Cpu, Sparkles, Database, FileSpreadsheet, Send, ShieldAlert } from 'lucide-react';

export const DemonstrationsSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<number>(0);

  const current = t.demonstrations.items[activeDemo] || t.demonstrations.items[0];

  return (
    <section id="demonstrations" className="py-24 bg-[#23313E] relative border-t border-b border-[#E6E5E4]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#516B84] border border-[#E6E5E4]/30 text-xs font-semibold text-[#E6E5E4] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E6E5E4]" />
            <span>{t.demonstrations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-4">
            {t.demonstrations.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.demonstrations.description}
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {t.demonstrations.items.map((item, index) => {
            const isSelected = activeDemo === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveDemo(index)}
                className={`text-start p-4 sm:p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-[#2B3B4A] border-[#E6E5E4] shadow-lg'
                    : 'bg-[#1E2B37]/50 border-[#E6E5E4]/15 hover:border-[#E6E5E4]/35 hover:bg-[#1E2B37]'
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-[10px] font-mono font-bold text-[#E6E5E4]/60 block mb-1 uppercase">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#E6E5E4] font-serif">
                  {item.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Showcase Demonstration Blueprint Box */}
        <div className="bg-[#2B3B4A] border border-[#E6E5E4]/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Problem, Solution & Benefits (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E5E4]/15">
                <div>
                  <span className="text-xs font-mono text-[#E6E5E4]/60 uppercase block">
                    {current.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#E6E5E4] font-serif">
                    {current.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1E2B37] border border-[#E6E5E4]/20 text-[#E6E5E4]">
                  Concept Blueprint
                </span>
              </div>

              {/* Problem */}
              <div className="p-4 rounded-xl bg-[#1E2B37]/60 border border-[#E6E5E4]/15">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-2 font-mono">
                  {t.demonstrations.problemLabel}
                </div>
                <p className="text-sm text-[#E6E5E4] leading-relaxed">
                  {current.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-[#516B84]/40 border border-[#E6E5E4]/30">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4] mb-2 font-mono">
                  {t.demonstrations.solutionLabel}
                </div>
                <p className="text-sm text-[#E6E5E4] font-medium leading-relaxed">
                  {current.solution}
                </p>
              </div>

              {/* Technologies / Integrations */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-3 font-mono">
                  {t.demonstrations.technologiesLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#1E2B37] border border-[#E6E5E4]/20 text-xs font-mono text-[#E6E5E4]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Operational Benefits */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-3 font-mono">
                  {t.demonstrations.benefitsLabel}
                </div>
                <div className="space-y-2">
                  {current.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E6E5E4]">
                      <CheckCircle2 className="w-4 h-4 text-[#E6E5E4] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Animated Workflow Visualization Diagram (5 cols) */}
            <div className="lg:col-span-5 bg-[#1E2B37] border border-[#E6E5E4]/25 rounded-2xl p-6 shadow-inner">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E5E4]/15 mb-6 text-xs font-mono text-[#E6E5E4]/70">
                <span>{t.demonstrations.workflowLabel}</span>
                <span>EXEC-SEQUENCE</span>
              </div>

              {/* 4-Step Visual Sequence */}
              <div className="space-y-4 relative">
                {current.workflow.map((stepText, index) => (
                  <div key={index} className="relative">
                    <div className="p-3.5 rounded-xl bg-[#2B3B4A] border border-[#E6E5E4]/20 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#516B84] border border-[#E6E5E4]/40 flex items-center justify-center text-xs font-mono font-bold text-[#E6E5E4] shrink-0">
                        0{index + 1}
                      </span>
                      <span className="text-xs text-[#E6E5E4] font-medium leading-relaxed pt-0.5">
                        {stepText}
                      </span>
                    </div>
                    {index < current.workflow.length - 1 && (
                      <div className="w-[1.5px] h-4 bg-[#E6E5E4]/30 my-1 ml-6 rtl:mr-6 rtl:ml-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Verification & Audit Note */}
              <div className="mt-6 pt-4 border-t border-[#E6E5E4]/15 flex items-center justify-between text-[11px] font-mono text-[#E6E5E4]/60">
                <span>Zero Data Loss Protocol</span>
                <span>Traceable Logs</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
