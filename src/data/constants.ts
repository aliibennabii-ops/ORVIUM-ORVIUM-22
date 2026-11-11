export const BRAND = {
  name: 'ORVIUM',
  logoUrl: '/assets/aistudio/Logo_bec0a223.jpg',
  colors: {
    primaryBlue: '#516B84',
    primaryBlueDark: '#2B3B4A',
    primaryBlueDeep: '#1C2732',
    primaryBlueLight: '#6885A3',
    primaryBlueSoft: '#88A2BD',
    ivory: '#E6E5E4',
    ivoryLight: '#FAF9F8',
    ivoryDark: '#D4D3D1',
  },
  contacts: {
    phone: '+213562679104',
    phoneFormatted: '+213 562 679 104',
    whatsappBaseUrl: 'https://wa.me/213562679104',
    email: 'agency.orvium@gmail.com',
    instagram: 'https://www.instagram.com/orvium.orvium/',
    tiktok: 'https://www.tiktok.com/@orvium',
    facebook: 'https://www.facebook.com/profile.php?id=61596092948817',
  },
} as const;

export type SupportedLanguage = 'ar' | 'fr' | 'en';

export const LANGUAGES: Record<SupportedLanguage, { name: string; flag: string; dir: 'rtl' | 'ltr' }> = {
  ar: { name: 'العربية', flag: '🇩🇿', dir: 'rtl' },
  fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
};
