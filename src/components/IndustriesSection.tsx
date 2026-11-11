import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ShoppingBag, Store, Briefcase, Building, Layers, CheckCircle2 } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ecommerce');

  const industryIcons: Record<string, React.ReactNode> = {
    ecommerce: <ShoppingBag className="w-5 h-5 text-[#E6E5E4]" />,
    retail: <Store className="w-5 h-5 text-[#E6E5E4]" />,
    services: <Briefcase className="w-5 h-5 text-[#E6E5E4]" />,
    realestate: <Building className="w-5 h-5 text-[#E6E5E4]" />,
    smb: <Layers className="w-5 h-5 text-[#E6E5E4]" />,
  };

  const current =
    t.industries.items.find((item) => item.id === selectedIndustry) || t.industries.items[0];

  return (
    <section id="industries" className="py-24 bg-[#23313E] relative border-t border-b border-[#E6E5E4]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#E6E5E4]/70 mb-3">
            {t.industries.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-4">
            {t.industries.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.industries.description}
          </p>
        </div>

        {/* Industry Selector Pills / Cards */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {t.industries.items.map((item) => {
            const isSelected = item.id === selectedIndustry;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIndustry(item.id)}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#E6E5E4] text-[#516B84] border-[#E6E5E4] shadow'
                    : 'bg-[#2B3B4A]/50 text-[#E6E5E4] border-[#E6E5E4]/20 hover:border-[#E6E5E4]/40 hover:bg-[#2B3B4A]'
                }`}
                aria-pressed={isSelected}
              >
                <span className={isSelected ? 'text-[#516B84]' : 'text-[#E6E5E4]'}>
                  {industryIcons[item.id]}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card with Unique Visual Composition */}
        <div className="bg-[#2B3B4A] border border-[#E6E5E4]/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Description & Use Cases (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#516B84] border border-[#E6E5E4]/30 shadow-inner">
                  {industryIcons[current.id]}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#E6E5E4] font-serif">
                    {current.title}
                  </h3>
                  <span className="text-xs font-mono text-[#E6E5E4]/60">
                    INDUSTRY DOMAIN // {current.id.toUpperCase()}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#E6E5E4]/90 leading-relaxed font-light">
                {current.description}
              </p>

              {/* Use Cases Grid */}
              <div className="pt-4 border-t border-[#E6E5E4]/15">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6E5E4]/70 mb-4 font-mono">
                  Applied Automation Solutions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.useCases.map((uc, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#1E2B37]/50 border border-[#E6E5E4]/15 flex items-start gap-2.5 text-xs text-[#E6E5E4]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E6E5E4] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Architectural Diagram Visualizer (5 cols) */}
            <div className="lg:col-span-5 bg-[#1E2B37] border border-[#E6E5E4]/20 rounded-2xl p-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between text-xs font-mono text-[#E6E5E4]/70 pb-3 border-b border-[#E6E5E4]/15 mb-4">
                <span>{current.diagramTitle}</span>
                <span className="text-[10px] text-[#E6E5E4]/50">SPEC-V4</span>
              </div>

              {/* Composition based on industry */}
              <div className="py-6 flex flex-col items-center justify-center min-h-[220px]">
                
                {current.id === 'ecommerce' && (
                  <div className="w-full space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono text-[#E6E5E4]">
                      <span className="p-2 rounded bg-[#2B3B4A] border border-[#E6E5E4]/20">Storefront</span>
                      <span className="text-[#E6E5E4]/40">──▶</span>
                      <span className="p-2 rounded bg-[#516B84] border border-[#E6E5E4]/40">ORVIUM Core</span>
                      <span className="text-[#E6E5E4]/40">──▶</span>
                      <span className="p-2 rounded bg-[#2B3B4A] border border-[#E6E5E4]/20">Dispatch</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#2B3B4A]/50 border border-[#E6E5E4]/15 text-[11px] text-[#E6E5E4]/80 space-y-1.5">
                      <div className="flex justify-between font-mono">
                        <span>Cart Validation:</span>
                        <span className="text-[#E6E5E4]">Instant</span>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>Stock Sync Across Channels:</span>
                        <span className="text-[#E6E5E4]">0.02s</span>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>Carrier Slip Generation:</span>
                        <span className="text-[#E6E5E4]">Automated</span>
                      </div>
                    </div>
                  </div>
                )}

                {current.id === 'retail' && (
                  <div className="w-full space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded bg-[#2B3B4A] border border-[#E6E5E4]/20">Branch A</div>
                      <div className="p-2 rounded bg-[#2B3B4A] border border-[#E6E5E4]/20">Branch B</div>
                      <div className="p-2 rounded bg-[#2B3B4A] border border-[#E6E5E4]/20">Branch C</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#516B84]/50 border border-[#E6E5E4]/30 text-center text-xs text-[#E6E5E4] font-semibold">
                      ORVIUM Centralized Warehouse & Inventory Hub
                    </div>
                    <div className="p-2.5 rounded bg-[#2B3B4A]/50 text-[11px] text-center text-[#E6E5E4]/70 font-mono">
                      Consolidated Multi-Store Daily Reorder Thresholds
                    </div>
                  </div>
                )}

                {current.id === 'services' && (
                  <div className="w-full space-y-3">
                    <div className="p-2.5 rounded-lg bg-[#2B3B4A] border border-[#E6E5E4]/20 flex justify-between items-center text-xs">
                      <span className="text-[#E6E5E4]/70 font-mono">Inbound Lead Intake</span>
                      <span className="text-[#E6E5E4] font-semibold font-mono">Automated Form</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#516B84] border border-[#E6E5E4]/30 flex justify-between items-center text-xs">
                      <span className="text-[#E6E5E4]/90 font-mono">Proposal & Scope Builder</span>
                      <span className="text-[#E6E5E4] font-semibold font-mono">Dynamic PDF</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#2B3B4A] border border-[#E6E5E4]/20 flex justify-between items-center text-xs">
                      <span className="text-[#E6E5E4]/70 font-mono">Milestone Invoicing</span>
                      <span className="text-[#E6E5E4] font-semibold font-mono">Scheduled Trigger</span>
                    </div>
                  </div>
                )}

                {current.id === 'realestate' && (
                  <div className="w-full space-y-3">
                    <div className="p-3 rounded-xl bg-[#2B3B4A] border border-[#E6E5E4]/20 text-xs space-y-2">
                      <div className="flex justify-between font-mono text-[#E6E5E4]/80">
                        <span>Ad Click / Portal Lead:</span>
                        <span className="text-[#E6E5E4]">Captured</span>
                      </div>
                      <div className="flex justify-between font-mono text-[#E6E5E4]/80">
                        <span>Automated Budget Audit:</span>
                        <span className="text-[#E6E5E4]">Score: Qualified</span>
                      </div>
                      <div className="flex justify-between font-mono text-[#E6E5E4]/80">
                        <span>Viewing Slot Booked:</span>
                        <span className="text-[#E6E5E4]">Broker Calendar</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-center font-mono text-[#E6E5E4]/60">
                      Zero Buyer Drop-Off Pipeline
                    </div>
                  </div>
                )}

                {current.id === 'smb' && (
                  <div className="w-full space-y-3">
                    <div className="p-3 rounded-xl bg-[#516B84]/40 border border-[#E6E5E4]/30 text-xs space-y-2">
                      <div className="flex justify-between text-[#E6E5E4]">
                        <span className="font-mono">Central Workspace CRM:</span>
                        <span className="font-semibold">Linked</span>
                      </div>
                      <div className="flex justify-between text-[#E6E5E4]">
                        <span className="font-mono">Financial Reporting:</span>
                        <span className="font-semibold">Weekly Brief</span>
                      </div>
                      <div className="flex justify-between text-[#E6E5E4]">
                        <span className="font-mono">Staff Approvals:</span>
                        <span className="font-semibold">1-Click Bot</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-center font-mono text-[#E6E5E4]/60">
                      Scalable Corporate Architecture for Lean Teams
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
