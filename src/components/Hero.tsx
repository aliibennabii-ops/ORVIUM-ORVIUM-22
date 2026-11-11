import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ArrowUpRight, Cpu, Layers, Workflow, Database, Bot, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, dir, openContact } = useLanguage();
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      id: 0,
      title: 'ERP & Systems',
      role: 'Source of Truth',
      status: 'Synchronized',
      rate: '0.04s latency',
      metric: '100% Data Integrity',
    },
    {
      id: 1,
      title: 'AI Agent Core',
      role: 'Reasoning & Triage',
      status: 'Active',
      rate: 'Autonomous Execution',
      metric: 'Zero Manual Intermediary',
    },
    {
      id: 2,
      title: 'Omnichannel API',
      role: 'Client Touchpoints',
      status: 'Connected 24/7',
      rate: 'Instant Routing',
      metric: 'Immediate Dispatch',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#2B3B4A]/60 border border-[#E6E5E4]/20 text-xs font-semibold text-[#E6E5E4] mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#E6E5E4] opacity-80" />
              <span>{t.hero.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#E6E5E4] leading-[1.15] text-balance mb-6 font-serif">
              {t.hero.headline}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#E6E5E4]/80 leading-relaxed max-w-2xl mb-8 font-light">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => openContact()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#516B84] bg-[#E6E5E4] hover:bg-[#FAF9F8] active:scale-[0.98] rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6E5E4]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-[-90deg]' : ''}`} />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#E6E5E4] hover:text-[#FAF9F8] bg-[#2B3B4A]/40 hover:bg-[#2B3B4A]/70 border border-[#E6E5E4]/25 hover:border-[#E6E5E4]/50 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6E5E4]"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Supporting Statement / Proof Strip */}
            <div className="pt-6 border-t border-[#E6E5E4]/15 w-full max-w-2xl">
              <div className="flex items-center gap-2 text-xs md:text-sm text-[#E6E5E4]/85 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#E6E5E4] shrink-0" />
                <span>{t.hero.valueProposition}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Technical Architecture (5 cols) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl bg-[#2B3B4A]/80 border border-[#E6E5E4]/25 p-6 backdrop-blur-md shadow-2xl">
              
              {/* Header of the Orchestrator Box */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E5E4]/15 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#516B84]/50 border border-[#E6E5E4]/20">
                    <Cpu className="w-4 h-4 text-[#E6E5E4]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#E6E5E4]">ORVIUM Pipeline Core</div>
                    <div className="text-[10px] text-[#E6E5E4]/60 font-mono">Architecture v2.4</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#E6E5E4]/80 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6E5E4] opacity-80" />
                  <span>24/7 Uptime</span>
                </div>
              </div>

              {/* Animated Interactive Nodes Visualization */}
              <div className="space-y-3 mb-6">
                {nodes.map((node) => {
                  const isSelected = activeNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#516B84]/60 border-[#E6E5E4] shadow-sm'
                          : 'bg-[#1E2B37]/40 border-[#E6E5E4]/15 hover:border-[#E6E5E4]/35'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          {node.id === 0 && <Database className="w-4 h-4 text-[#E6E5E4]" />}
                          {node.id === 1 && <Bot className="w-4 h-4 text-[#E6E5E4]" />}
                          {node.id === 2 && <Workflow className="w-4 h-4 text-[#E6E5E4]" />}
                          <span className="text-xs font-semibold text-[#E6E5E4]">{node.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#E6E5E4]/70 px-2 py-0.5 rounded bg-[#1E2B37]/50 border border-[#E6E5E4]/15">
                          {node.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#E6E5E4]/70 pt-1">
                        <span>{node.role}</span>
                        <span className="font-mono text-[#E6E5E4]">{node.metric}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Flow Diagram / Signal Conduit */}
              <div className="p-4 rounded-xl bg-[#1E2B37]/60 border border-[#E6E5E4]/15">
                <div className="flex items-center justify-between text-[11px] text-[#E6E5E4]/70 mb-3 font-mono">
                  <span>Stream Validation</span>
                  <span>Active Packet Dispatch</span>
                </div>
                
                {/* SVG Animated Connector Path */}
                <div className="relative h-12 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 320 48" fill="none" preserveAspectRatio="none">
                    {/* Background track line */}
                    <path
                      d="M 10 24 Q 80 8, 160 24 T 310 24"
                      stroke="#E6E5E4"
                      strokeWidth="1.5"
                      strokeOpacity="0.2"
                    />
                    {/* Animated dash line */}
                    <path
                      d="M 10 24 Q 80 8, 160 24 T 310 24"
                      stroke="#E6E5E4"
                      strokeWidth="2"
                      strokeOpacity="0.8"
                      className="animate-flow-dash"
                    />
                    {/* Nodes along path */}
                    <circle cx="10" cy="24" r="4" fill="#E6E5E4" />
                    <circle cx="160" cy="24" r="5" fill="#E6E5E4" />
                    <circle cx="310" cy="24" r="4" fill="#E6E5E4" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#E6E5E4]/80 pt-1 font-mono">
                  <span>Input Ingestion</span>
                  <span>Autonomous Logic</span>
                  <span>Delivery Event</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-[#E6E5E4]/75">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E6E5E4]" />
                  <span>{t.hero.liveOrchestration}</span>
                </span>
                <span className="font-mono text-[10px] text-[#E6E5E4]/60">ORVIUM // ENG</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
