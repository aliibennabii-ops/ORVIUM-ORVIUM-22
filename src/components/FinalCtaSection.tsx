import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { getWhatsAppUrl } from '../utils/contact.ts';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const { t, language, dir, openContact } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(language);

  return (
    <section className="py-24 bg-[#1E2B37] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Glow & Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B3B4A] border border-[#E6E5E4]/20 text-xs font-semibold text-[#E6E5E4] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E6E5E4]" />
          <span>ORVIUM // ENG</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-6 leading-tight max-w-3xl mx-auto">
          {t.finalCta.headline}
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#E6E5E4]/80 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          {t.finalCta.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openContact()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-[#516B84] bg-[#E6E5E4] hover:bg-[#FAF9F8] active:scale-[0.98] rounded-xl transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6E5E4]"
          >
            <MessageSquare className="w-4 h-4 text-[#516B84]" />
            <span>{t.finalCta.primaryCta}</span>
            <ArrowUpRight className={`w-4 h-4 text-[#516B84] ${dir === 'rtl' ? 'rotate-[-90deg]' : ''}`} />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-medium text-[#E6E5E4] bg-[#2B3B4A]/60 hover:bg-[#2B3B4A] border border-[#E6E5E4]/25 hover:border-[#E6E5E4]/50 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6E5E4]"
          >
            <span>{t.finalCta.secondaryCta}</span>
          </a>
        </div>

        {/* Brand Core Value Subtitle */}
        <div className="mt-12 text-xs font-mono text-[#E6E5E4]/60">
          We automate. You grow.
        </div>

      </div>
    </section>
  );
};
