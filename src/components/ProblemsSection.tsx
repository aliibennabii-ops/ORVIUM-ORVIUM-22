import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import {
  FileText,
  Users,
  ShoppingCart,
  MessageCircle,
  Unlink,
  BarChart3,
  Cog,
  ArrowRight,
  AlertTriangle,
  TrendingDown,
  Sparkles,
} from 'lucide-react';

export const ProblemsSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>('admin');

  const icons: Record<string, React.ReactNode> = {
    admin: <FileText className="w-5 h-5 text-[#E6E5E4]" />,
    crm: <Users className="w-5 h-5 text-[#E6E5E4]" />,
    orders: <ShoppingCart className="w-5 h-5 text-[#E6E5E4]" />,
    support: <MessageCircle className="w-5 h-5 text-[#E6E5E4]" />,
    apps: <Unlink className="w-5 h-5 text-[#E6E5E4]" />,
    reporting: <BarChart3 className="w-5 h-5 text-[#E6E5E4]" />,
    ops: <Cog className="w-5 h-5 text-[#E6E5E4]" />,
  };

  const selectedItem =
    t.problems.items.find((item) => item.id === selectedId) || t.problems.items[0];

  return (
    <section id="problems" className="py-24 bg-[#23313E] relative border-t border-b border-[#E6E5E4]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#E6E5E4]/70 mb-3">
            {t.problems.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-4">
            {t.problems.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.problems.description}
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Problem Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {t.problems.items.map((item, index) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-start p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#516B84] border-[#E6E5E4] shadow-md'
                      : 'bg-[#2B3B4A]/40 border-[#E6E5E4]/15 hover:border-[#E6E5E4]/35 hover:bg-[#2B3B4A]/70'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono text-[#E6E5E4]/50 w-5 shrink-0">
                      0{index + 1}
                    </span>
                    <div className="p-2 rounded-lg bg-[#1E2B37]/50 border border-[#E6E5E4]/20 shrink-0">
                      {icons[item.id]}
                    </div>
                    <span className="text-sm font-semibold text-[#E6E5E4] truncate">
                      {item.title}
                    </span>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 text-[#E6E5E4] shrink-0 transition-transform ${
                      isSelected ? 'opacity-100 scale-110' : 'opacity-40'
                    } ${dir === 'rtl' ? 'rotate-180' : ''}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Diagnostic & Automation Solution Blueprint (7 cols) */}
          <div className="lg:col-span-7 bg-[#2B3B4A] border border-[#E6E5E4]/25 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            
            {/* Top Bar of Blueprint */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E6E5E4]/15 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#516B84] border border-[#E6E5E4]/30 shadow-inner">
                  {icons[selectedItem.id]}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E6E5E4] font-serif">
                    {selectedItem.title}
                  </h3>
                  <span className="text-xs font-mono text-[#E6E5E4]/60">
                    DIAGNOSTIC // {selectedItem.id.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1E2B37]/60 border border-[#E6E5E4]/20 text-[11px] font-mono text-[#E6E5E4]/80">
                <Sparkles className="w-3.5 h-3.5 text-[#E6E5E4]" />
                <span>Engineered Resolution</span>
              </div>
            </div>

            {/* Content: Problem -> Impact -> Automation Opportunity */}
            <div className="space-y-6">
              
              {/* Block 1: Problem */}
              <div className="p-4 rounded-xl bg-[#1E2B37]/50 border border-[#E6E5E4]/15">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-2">
                  <AlertTriangle className="w-4 h-4 text-[#E6E5E4]" />
                  <span>{t.problems.problemLabel}</span>
                </div>
                <p className="text-sm sm:text-base text-[#E6E5E4] leading-relaxed">
                  {selectedItem.problem}
                </p>
              </div>

              {/* Block 2: Impact */}
              <div className="p-4 rounded-xl bg-[#1E2B37]/30 border border-[#E6E5E4]/15">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-2">
                  <TrendingDown className="w-4 h-4 text-[#E6E5E4]" />
                  <span>{t.problems.impactLabel}</span>
                </div>
                <p className="text-sm sm:text-base text-[#E6E5E4]/85 leading-relaxed">
                  {selectedItem.impact}
                </p>
              </div>

              {/* Block 3: Automation Solution */}
              <div className="p-5 rounded-xl bg-[#516B84]/40 border border-[#E6E5E4]/40">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E6E5E4] mb-2">
                  <Sparkles className="w-4 h-4 text-[#E6E5E4]" />
                  <span>{t.problems.solutionLabel}</span>
                </div>
                <p className="text-sm sm:text-base text-[#E6E5E4] font-medium leading-relaxed">
                  {selectedItem.solution}
                </p>
              </div>

            </div>

            {/* Interactive Vector Pipeline Visualizer at Bottom */}
            <div className="mt-8 pt-6 border-t border-[#E6E5E4]/15">
              <div className="flex items-center justify-between text-xs font-mono text-[#E6E5E4]/60 mb-3">
                <span>Manual Bottleneck</span>
                <span>Automated State</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded bg-[#1E2B37]/50 border border-[#E6E5E4]/15">
                  <span className="text-[#E6E5E4]/60 block text-[10px] mb-1">Before</span>
                  <span className="font-semibold text-[#E6E5E4]">Human Latency</span>
                </div>
                <div className="p-2 rounded bg-[#516B84]/50 border border-[#E6E5E4]/30">
                  <span className="text-[#E6E5E4]/60 block text-[10px] mb-1">Bridge</span>
                  <span className="font-semibold text-[#E6E5E4]">ORVIUM Logic</span>
                </div>
                <div className="p-2 rounded bg-[#1E2B37]/50 border border-[#E6E5E4]/15">
                  <span className="text-[#E6E5E4]/60 block text-[10px] mb-1">After</span>
                  <span className="font-semibold text-[#E6E5E4]">Instant Flow</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
