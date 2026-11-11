import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#23313E] relative border-t border-[#E6E5E4]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#E6E5E4]/70 mb-3">
            {t.faq.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6E5E4] font-serif mb-4">
            {t.faq.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.faq.description}
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#2B3B4A] border-[#E6E5E4]/50 shadow-md'
                    : 'bg-[#1E2B37]/50 border-[#E6E5E4]/15 hover:border-[#E6E5E4]/30 hover:bg-[#1E2B37]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6E5E4] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#E6E5E4] font-serif">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-lg border transition-transform shrink-0 ${
                      isOpen
                        ? 'bg-[#516B84] border-[#E6E5E4] text-[#E6E5E4]'
                        : 'bg-[#2B3B4A]/60 border-[#E6E5E4]/20 text-[#E6E5E4]/70'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-[#E6E5E4]/85 leading-relaxed font-light border-t border-[#E6E5E4]/10 mt-1">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
