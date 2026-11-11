import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, LANGUAGES } from '../data/constants.ts';
import { translations, TranslationSchema } from '../data/translations.ts';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  dir: 'rtl' | 'ltr';
  t: TranslationSchema;
  isContactOpen: boolean;
  openContact: (customMessage?: string) => void;
  closeContact: () => void;
  initialContactMessage: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Arabic as requested: "Arabic 🇩🇿 Default language"
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('orvium_language');
      if (saved === 'ar' || saved === 'fr' || saved === 'en') {
        return saved;
      }
    } catch {
      // localStorage may fail in restricted iframes
    }
    return 'ar';
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialContactMessage, setInitialContactMessage] = useState('');

  const dir = LANGUAGES[language]?.dir || (language === 'ar' ? 'rtl' : 'ltr');

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('orvium_language', lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.title = translations[language].meta.title;

    // Update meta description dynamically
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[language].meta.description);
    }
  }, [language, dir]);

  const openContact = (customMessage?: string) => {
    setInitialContactMessage(customMessage || '');
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
    setInitialContactMessage('');
  };

  const t = translations[language] || translations.ar;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dir,
        t,
        isContactOpen,
        openContact,
        closeContact,
        initialContactMessage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
