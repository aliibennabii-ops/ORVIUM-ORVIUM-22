import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { BRAND } from '../data/constants.ts';
import { getWhatsAppUrl, getMailtoUrl } from '../utils/contact.ts';
import { Instagram, Facebook, MessageSquare, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(language);
  const mailtoUrl = getMailtoUrl(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C2732] border-t border-[#E6E5E4]/15 pt-16 pb-12 text-[#E6E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#E6E5E4]/15">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E6E5E4]/30">
                <img
                  src={BRAND.logoUrl}
                  alt="ORVIUM"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-bold font-serif uppercase tracking-tight text-[#E6E5E4]">
                  {BRAND.name}
                </span>
                <div className="text-xs text-[#E6E5E4]/70 font-mono">
                  AI Automation Engineering
                </div>
              </div>
            </div>

            <p className="text-sm text-[#E6E5E4]/80 leading-relaxed max-w-sm font-light">
              {t.about.manifesto}
            </p>

            <div className="text-xs font-mono font-medium text-[#E6E5E4]">
              {t.footer.tagline}
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#E6E5E4]/60 mb-2">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E6E5E4]/80">
              <li>
                <a href="#services" className="hover:text-[#E6E5E4] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-[#E6E5E4] transition-colors">
                  {t.nav.problems}
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#E6E5E4] transition-colors">
                  {t.nav.industries}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#E6E5E4] transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#demonstrations" className="hover:text-[#E6E5E4] transition-colors">
                  {t.nav.demonstrations}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E6E5E4] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E6E5E4] transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts & Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#E6E5E4]/60 mb-2">
              {t.footer.directContact}
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E6E5E4]/90">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#E6E5E4] transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-[#E6E5E4]/70 group-hover:text-[#E6E5E4]" />
                  <span>WhatsApp: {BRAND.contacts.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={mailtoUrl}
                  className="flex items-center gap-2.5 hover:text-[#E6E5E4] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#E6E5E4]/70 group-hover:text-[#E6E5E4]" />
                  <span>{BRAND.contacts.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[#E6E5E4]/80">
                <Phone className="w-4 h-4 text-[#E6E5E4]/70" />
                <span>{BRAND.contacts.phoneFormatted}</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#E6E5E4]/60 mb-2">
                {t.footer.socials}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#2B3B4A] hover:bg-[#516B84] text-[#E6E5E4] border border-[#E6E5E4]/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND.contacts.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#2B3B4A] hover:bg-[#516B84] text-[#E6E5E4] border border-[#E6E5E4]/20 transition-colors font-bold text-xs"
                  aria-label="TikTok"
                >
                  TT
                </a>
                <a
                  href={BRAND.contacts.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#2B3B4A] hover:bg-[#516B84] text-[#E6E5E4] border border-[#E6E5E4]/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6E5E4]/60">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}
          </div>
          <div className="text-center sm:text-start max-w-md text-[11px] font-light">
            {t.footer.legalNotice}
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#2B3B4A] hover:bg-[#516B84] text-[#E6E5E4] border border-[#E6E5E4]/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
