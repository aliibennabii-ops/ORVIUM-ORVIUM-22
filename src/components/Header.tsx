import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { BRAND, LANGUAGES, SupportedLanguage } from '../data/constants.ts';
import { Globe, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, dir, t, openContact } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLangMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#problems', label: t.nav.problems },
    { href: '#industries', label: t.nav.industries },
    { href: '#process', label: t.nav.process },
    { href: '#demonstrations', label: t.nav.demonstrations },
    { href: '#about', label: t.nav.about },
    { href: '#faq', label: t.nav.faq },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2B3B4A]/90 backdrop-blur-md border-b border-[#E6E5E4]/15 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark & Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6E5E4] rounded-lg p-1"
            aria-label="ORVIUM Homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#E6E5E4]/30 shadow-inner shrink-0 group-hover:border-[#E6E5E4] transition-colors">
              <img
                src={BRAND.logoUrl}
                alt="ORVIUM"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#E6E5E4] font-serif uppercase">
                {BRAND.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#E6E5E4]/70 font-medium tracking-wide">
                AI Engineering
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#E6E5E4]/80"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#E6E5E4] transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#E6E5E4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language Selector & Primary CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[#E6E5E4]/25 hover:border-[#E6E5E4]/60 text-xs font-medium text-[#E6E5E4] bg-[#2B3B4A]/50 hover:bg-[#2B3B4A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6E5E4]"
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
                aria-label={t.nav.language}
              >
                <span className="text-sm leading-none" role="img" aria-hidden="true">
                  {LANGUAGES[language].flag}
                </span>
                <span className="hidden sm:inline">{LANGUAGES[language].name}</span>
                <Globe className="w-3.5 h-3.5 text-[#E6E5E4]/70" />
              </button>

              {isLangMenuOpen && (
                <div
                  className={`absolute mt-2 w-36 rounded-xl bg-[#2B3B4A] border border-[#E6E5E4]/25 shadow-xl py-1.5 z-50 text-xs ${
                    dir === 'rtl' ? 'left-0' : 'right-0'
                  }`}
                  role="menu"
                >
                  {(Object.keys(LANGUAGES) as SupportedLanguage[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setLanguage(key);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 hover:bg-[#516B84]/50 transition-colors ${
                        language === key ? 'text-[#E6E5E4] font-semibold bg-[#516B84]/30' : 'text-[#E6E5E4]/80'
                      }`}
                      role="menuitem"
                    >
                      <span className="flex items-center gap-2">
                        <span role="img" aria-hidden="true">
                          {LANGUAGES[key].flag}
                        </span>
                        <span>{LANGUAGES[key].name}</span>
                      </span>
                      {language === key && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E6E5E4]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={() => openContact()}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-[#516B84] bg-[#E6E5E4] hover:bg-[#FAF9F8] active:scale-[0.98] rounded-lg transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6E5E4] whitespace-nowrap"
            >
              <span>{t.nav.discussProject}</span>
              <ArrowUpRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-[-90deg]' : ''}`} />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#E6E5E4] hover:bg-[#2B3B4A] border border-[#E6E5E4]/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6E5E4]"
              aria-label={isMobileMenuOpen ? t.nav.close : t.nav.menu}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#1E2B37]/80 backdrop-blur-md xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 bottom-0 w-4/5 max-w-sm bg-[#2B3B4A] border-r border-l border-[#E6E5E4]/15 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto ${
              dir === 'rtl' ? 'right-0' : 'left-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E6E5E4]/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E6E5E4]/40">
                    <img src={BRAND.logoUrl} alt="ORVIUM" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold text-lg text-[#E6E5E4] font-serif uppercase">
                    {BRAND.name}
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-[#E6E5E4]/80 hover:text-[#E6E5E4] hover:bg-[#516B84]/40 transition-colors"
                  aria-label={t.nav.close}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#E6E5E4]/85 hover:text-[#E6E5E4] hover:bg-[#516B84]/30 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Language Selector for Mobile */}
              <div className="pt-4 border-t border-[#E6E5E4]/15">
                <div className="text-xs text-[#E6E5E4]/60 font-semibold mb-2">
                  {t.nav.language}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(LANGUAGES) as SupportedLanguage[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setLanguage(key)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium border transition-colors ${
                        language === key
                          ? 'bg-[#E6E5E4] text-[#516B84] border-[#E6E5E4]'
                          : 'border-[#E6E5E4]/25 text-[#E6E5E4] hover:bg-[#516B84]/40'
                      }`}
                    >
                      <span>{LANGUAGES[key].flag}</span>
                      <span>{LANGUAGES[key].name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Direct CTA */}
            <div className="pt-6 border-t border-[#E6E5E4]/15 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#516B84] bg-[#E6E5E4] hover:bg-[#FAF9F8] transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.nav.discussProject}</span>
              </button>
              <div className="text-center text-[11px] text-[#E6E5E4]/60">
                {BRAND.contacts.phoneFormatted}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
