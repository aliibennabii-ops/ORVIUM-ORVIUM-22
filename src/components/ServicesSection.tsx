import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ArrowUpRight, Check, Workflow, Sparkles, Bot, Network, Code, Layers } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { t, dir, openContact } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentService = t.services.items[activeTab] || t.services.items[0];

  return (
    <section id="services" className="py-24 bg-[#1E2B37] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#E6E5E4]/70 mb-3">
            {t.services.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-4">
            {t.services.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.services.description}
          </p>
        </div>

        {/* Tab Navigation for 3 Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {t.services.items.map((service, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={service.number}
                onClick={() => setActiveTab(index)}
                className={`text-start p-5 rounded-2xl border transition-all relative ${
                  isSelected
                    ? 'bg-[#2B3B4A] border-[#E6E5E4] shadow-lg'
                    : 'bg-[#23313E]/60 border-[#E6E5E4]/15 hover:border-[#E6E5E4]/35 hover:bg-[#23313E]'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#E6E5E4]/60">
                    {service.number}
                  </span>
                  {index === 0 && <Workflow className="w-5 h-5 text-[#E6E5E4]" />}
                  {index === 1 && <Sparkles className="w-5 h-5 text-[#E6E5E4]" />}
                  {index === 2 && <Bot className="w-5 h-5 text-[#E6E5E4]" />}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#E6E5E4] mb-1 font-serif">
                  {service.title}
                </h3>
                <span className="text-xs text-[#E6E5E4]/70 font-mono block">
                  {service.tagline}
                </span>
                {isSelected && (
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#E6E5E4]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Service Deep-Dive Card */}
        <div className="bg-[#2B3B4A] border border-[#E6E5E4]/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Header */}
              <div>
                <div className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#1E2B37] border border-[#E6E5E4]/20 text-[#E6E5E4] mb-3">
                  SERVICE // {currentService.number}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#E6E5E4] font-serif mb-2">
                  {currentService.title}
                </h3>
                <p className="text-sm font-mono text-[#E6E5E4]/60">
                  {currentService.tagline}
                </p>
              </div>

              {/* What It Is */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-2 font-mono">
                  {t.services.whatItIsLabel}
                </h4>
                <p className="text-sm sm:text-base text-[#E6E5E4] leading-relaxed">
                  {currentService.whatItIs}
                </p>
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-[#1E2B37]/50 border border-[#E6E5E4]/15">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-2 font-mono">
                  {t.services.problemSolvedLabel}
                </h4>
                <p className="text-sm text-[#E6E5E4]/90 leading-relaxed">
                  {currentService.problemSolved}
                </p>
              </div>

              {/* How It Works */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-2 font-mono">
                  {t.services.howItWorksLabel}
                </h4>
                <p className="text-sm sm:text-base text-[#E6E5E4]/90 leading-relaxed">
                  {currentService.howItWorks}
                </p>
              </div>

              {/* CTA to Discuss Project */}
              <div className="pt-4">
                <button
                  onClick={() => openContact(currentService.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#516B84] bg-[#E6E5E4] hover:bg-[#FAF9F8] active:scale-[0.98] rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6E5E4]"
                >
                  <span>{t.services.ctaLabel}</span>
                  <ArrowUpRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>

            </div>

            {/* Right Blueprint & Benefits Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Unique Animated Architecture Blueprint */}
              <div className="p-6 rounded-2xl bg-[#1E2B37] border border-[#E6E5E4]/20 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono text-[#E6E5E4]/70 mb-4 pb-3 border-b border-[#E6E5E4]/15">
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#E6E5E4]" />
                    <span>Architectural Blueprint</span>
                  </span>
                  <span>SYS-0{activeTab + 1}</span>
                </div>

                {/* SVG Visual Composition based on Service */}
                {activeTab === 0 && (
                  <div className="py-4">
                    <svg viewBox="0 0 300 130" className="w-full h-auto" fill="none">
                      {/* Flow path */}
                      <path d="M 20 65 L 100 65 L 140 30 L 220 30 L 280 65" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.4" />
                      <path d="M 100 65 L 140 100 L 220 100 L 280 65" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.4" />
                      <path d="M 20 65 L 280 65" stroke="#E6E5E4" strokeWidth="2" strokeOpacity="0.8" className="animate-flow-dash" />
                      
                      {/* Node boxes */}
                      <rect x="10" y="45" width="40" height="40" rx="6" fill="#2B3B4A" stroke="#E6E5E4" strokeWidth="1.5" />
                      <rect x="120" y="10" width="40" height="40" rx="6" fill="#2B3B4A" stroke="#E6E5E4" strokeWidth="1.5" />
                      <rect x="120" y="80" width="40" height="40" rx="6" fill="#2B3B4A" stroke="#E6E5E4" strokeWidth="1.5" />
                      <rect x="250" y="45" width="40" height="40" rx="6" fill="#516B84" stroke="#E6E5E4" strokeWidth="1.5" />

                      <text x="30" y="69" fill="#E6E5E4" fontSize="9" fontFamily="monospace" textAnchor="middle">IN</text>
                      <text x="140" y="34" fill="#E6E5E4" fontSize="9" fontFamily="monospace" textAnchor="middle">SYNC</text>
                      <text x="140" y="104" fill="#E6E5E4" fontSize="9" fontFamily="monospace" textAnchor="middle">RULE</text>
                      <text x="270" y="69" fill="#E6E5E4" fontSize="9" fontFamily="monospace" textAnchor="middle">OUT</text>
                    </svg>
                    <div className="text-[11px] font-mono text-[#E6E5E4]/70 text-center mt-2">
                      Deterministic Event Flow Pipeline
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="py-4">
                    <svg viewBox="0 0 300 130" className="w-full h-auto" fill="none">
                      {/* Neural / Cognitive parsing grid */}
                      <circle cx="150" cy="65" r="45" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />
                      <circle cx="150" cy="65" r="28" fill="#516B84" stroke="#E6E5E4" strokeWidth="1.5" />
                      <text x="150" y="69" fill="#E6E5E4" fontSize="10" fontFamily="monospace" textAnchor="middle">AI CORE</text>
                      
                      {/* Radiating input rays */}
                      <line x1="30" y1="35" x2="122" y2="55" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.6" className="animate-flow-dash" />
                      <line x1="30" y1="95" x2="122" y2="75" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.6" className="animate-flow-dash" />
                      <line x1="178" y1="55" x2="270" y2="35" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.6" className="animate-flow-dash" />
                      <line x1="178" y1="75" x2="270" y2="95" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.6" className="animate-flow-dash" />

                      <circle cx="30" cy="35" r="5" fill="#E6E5E4" />
                      <circle cx="30" cy="95" r="5" fill="#E6E5E4" />
                      <circle cx="270" cy="35" r="5" fill="#E6E5E4" />
                      <circle cx="270" cy="95" r="5" fill="#E6E5E4" />
                    </svg>
                    <div className="text-[11px] font-mono text-[#E6E5E4]/70 text-center mt-2">
                      Cognitive Semantic Ingestion & Structuring
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="py-4">
                    <svg viewBox="0 0 300 130" className="w-full h-auto" fill="none">
                      {/* Autonomous Agent loop */}
                      <rect x="30" y="25" width="70" height="35" rx="6" fill="#2B3B4A" stroke="#E6E5E4" strokeWidth="1.5" />
                      <rect x="200" y="25" width="70" height="35" rx="6" fill="#2B3B4A" stroke="#E6E5E4" strokeWidth="1.5" />
                      <rect x="115" y="75" width="70" height="35" rx="6" fill="#516B84" stroke="#E6E5E4" strokeWidth="1.5" />

                      <path d="M 100 42 L 200 42" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.7" className="animate-flow-dash" />
                      <path d="M 235 60 L 185 85" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.7" className="animate-flow-dash" />
                      <path d="M 115 85 L 65 60" stroke="#E6E5E4" strokeWidth="1.5" strokeOpacity="0.7" className="animate-flow-dash" />

                      <text x="65" y="47" fill="#E6E5E4" fontSize="8" fontFamily="monospace" textAnchor="middle">OBJECTIVE</text>
                      <text x="235" y="47" fill="#E6E5E4" fontSize="8" fontFamily="monospace" textAnchor="middle">TOOL CALL</text>
                      <text x="150" y="97" fill="#E6E5E4" fontSize="8" fontFamily="monospace" textAnchor="middle">SUPERVISOR</text>
                    </svg>
                    <div className="text-[11px] font-mono text-[#E6E5E4]/70 text-center mt-2">
                      Goal-Directed Tool Calling with Human Safeguards
                    </div>
                  </div>
                )}
              </div>

              {/* Practical Examples */}
              <div className="p-5 rounded-2xl bg-[#1E2B37]/60 border border-[#E6E5E4]/15">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-3 font-mono">
                  {t.services.examplesLabel}
                </h4>
                <ul className="space-y-2 text-xs text-[#E6E5E4]/90">
                  {currentService.examples.map((eg, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E6E5E4] font-mono shrink-0">·</span>
                      <span>{eg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expected Operational Benefits */}
              <div className="p-5 rounded-2xl bg-[#516B84]/40 border border-[#E6E5E4]/30">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4] mb-3 font-mono">
                  {t.services.benefitsLabel}
                </h4>
                <ul className="space-y-2 text-xs text-[#E6E5E4]">
                  {currentService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E6E5E4] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
