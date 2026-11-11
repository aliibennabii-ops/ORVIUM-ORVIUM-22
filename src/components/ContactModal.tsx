import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { BRAND } from '../data/constants.ts';
import { getWhatsAppUrl, getMailtoUrl } from '../utils/contact.ts';
import {
  X,
  MessageSquare,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Phone,
  ShieldCheck,
  Instagram,
  Facebook,
} from 'lucide-react';

export const ContactModal: React.FC = () => {
  const { isContactOpen, closeContact, language, t, dir, initialContactMessage } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isContactOpen) {
        closeContact();
      }
    };
    if (isContactOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isContactOpen, closeContact]);

  if (!isContactOpen) return null;

  const whatsappUrl = getWhatsAppUrl(
    language,
    initialContactMessage ? `مرحباً، أود مناقشة مشروع (${initialContactMessage}) مع ORVIUM.` : undefined
  );
  const mailtoUrl = getMailtoUrl(language, initialContactMessage);

  const handleCopyPhone = () => {
    try {
      navigator.clipboard.writeText(BRAND.contacts.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E2B37]/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={closeContact}
    >
      <div
        className="relative w-full max-w-xl bg-[#2B3B4A] border border-[#E6E5E4]/25 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeContact}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-xl text-[#E6E5E4]/70 hover:text-[#E6E5E4] hover:bg-[#516B84]/50 border border-[#E6E5E4]/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6E5E4]"
          aria-label={t.contactModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pe-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1E2B37] border border-[#E6E5E4]/20 text-[11px] font-mono text-[#E6E5E4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6E5E4]" />
            <span>DIRECT CHANNELS // VERIFIED</span>
          </div>
          <h3
            id="contact-modal-title"
            className="text-2xl sm:text-3xl font-bold text-[#E6E5E4] font-serif mb-2"
          >
            {t.contactModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#E6E5E4]/80 leading-relaxed font-light">
            {t.contactModal.subtitle}
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="space-y-4 mb-8">
          
          {/* Card 1: WhatsApp (Primary) */}
          <div className="p-5 rounded-2xl bg-[#1E2B37]/80 border border-[#E6E5E4]/25 hover:border-[#E6E5E4]/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#516B84] border border-[#E6E5E4]/30 shadow-inner">
                  <MessageSquare className="w-5 h-5 text-[#E6E5E4]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#E6E5E4] font-serif">
                    {t.contactModal.whatsappTitle}
                  </h4>
                  <span className="text-xs font-mono text-[#E6E5E4]/70 block">
                    {BRAND.contacts.phoneFormatted}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#E6E5E4]/80 mb-4 leading-relaxed font-light">
              {t.contactModal.whatsappDesc}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#516B84] bg-[#E6E5E4] hover:bg-[#FAF9F8] transition-colors shadow-sm"
            >
              <span>{t.contactModal.whatsappAction}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="p-5 rounded-2xl bg-[#1E2B37]/50 border border-[#E6E5E4]/20 hover:border-[#E6E5E4]/40 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#2B3B4A] border border-[#E6E5E4]/20">
                  <Mail className="w-5 h-5 text-[#E6E5E4]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#E6E5E4] font-serif">
                    {t.contactModal.emailTitle}
                  </h4>
                  <span className="text-xs font-mono text-[#E6E5E4]/70 block">
                    {BRAND.contacts.email}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#E6E5E4]/80 mb-4 leading-relaxed font-light">
              {t.contactModal.emailDesc}
            </p>
            <a
              href={mailtoUrl}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#E6E5E4] bg-[#2B3B4A] hover:bg-[#516B84]/60 border border-[#E6E5E4]/25 transition-colors"
            >
              <span>{t.contactModal.emailAction}</span>
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Phone Copy Strip */}
          <div className="p-3.5 rounded-xl bg-[#1E2B37]/40 border border-[#E6E5E4]/15 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#E6E5E4]/80">
              <Phone className="w-4 h-4 text-[#E6E5E4]" />
              <span className="font-mono">{BRAND.contacts.phoneFormatted}</span>
            </div>
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2B3B4A] hover:bg-[#516B84] text-[#E6E5E4] border border-[#E6E5E4]/20 transition-colors font-medium text-[11px]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#E6E5E4]" />
                  <span>{t.contactModal.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#E6E5E4]" />
                  <span>{t.contactModal.copyPhone}</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Official Social Accounts */}
        <div className="pt-6 border-t border-[#E6E5E4]/15">
          <div className="text-xs font-mono text-[#E6E5E4]/70 mb-3 uppercase">
            {t.contactModal.socialTitle}
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <a
              href={BRAND.contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1E2B37]/60 hover:bg-[#516B84]/40 border border-[#E6E5E4]/20 text-xs text-[#E6E5E4] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href={BRAND.contacts.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1E2B37]/60 hover:bg-[#516B84]/40 border border-[#E6E5E4]/20 text-xs text-[#E6E5E4] transition-colors"
            >
              <span className="font-bold text-xs">TT</span>
              <span>TikTok</span>
            </a>
            <a
              href={BRAND.contacts.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1E2B37]/60 hover:bg-[#516B84]/40 border border-[#E6E5E4]/20 text-xs text-[#E6E5E4] transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-6 flex items-center gap-2 text-[11px] text-[#E6E5E4]/60 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-[#E6E5E4]" />
          <span>{t.contactModal.officialDirectNotice}</span>
        </div>

      </div>
    </div>
  );
};
