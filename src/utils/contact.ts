import { BRAND, SupportedLanguage } from '../data/constants.ts';

export function getWhatsAppUrl(language: SupportedLanguage, customMessage?: string): string {
  const defaultMessages: Record<SupportedLanguage, string> = {
    ar: 'مرحباً، أود مناقشة مشروع أتمتة مع وكالة ORVIUM.',
    fr: "Bonjour, je souhaite échanger sur un projet d'automatisation avec l'agence ORVIUM.",
    en: 'Hello, I would like to discuss an automation engineering project with ORVIUM.',
  };

  const message = customMessage || defaultMessages[language] || defaultMessages.en;
  return `${BRAND.contacts.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getMailtoUrl(language: SupportedLanguage, projectType?: string): string {
  const subjects: Record<SupportedLanguage, string> = {
    ar: `طلب استشارة أتمتة — ORVIUM${projectType ? ` (${projectType})` : ''}`,
    fr: `Demande de consultation automatisation — ORVIUM${projectType ? ` (${projectType})` : ''}`,
    en: `Automation Engineering Consultation — ORVIUM${projectType ? ` (${projectType})` : ''}`,
  };

  const bodies: Record<SupportedLanguage, string> = {
    ar: `مرحباً فريق ORVIUM،\n\nأود استكشاف حلول الأتمتة المناسبة لمؤسستي.\n\nنوع النشاط:\nالأدوات الحالية:\nالتحديات التشغيلية:\n\nمع التحية،`,
    fr: `Bonjour l'équipe ORVIUM,\n\nJe souhaite explorer des solutions d'automatisation pour notre organisation.\n\nSecteur d'activité :\nOutils actuels :\nDéfis opérationnels :\n\nCordialement,`,
    en: `Hello ORVIUM team,\n\nI would like to explore automation solutions for our organization.\n\nIndustry / Business type:\nCurrent tools:\nOperational challenges:\n\nBest regards,`,
  };

  const subject = encodeURIComponent(subjects[language] || subjects.en);
  const body = encodeURIComponent(bodies[language] || bodies.en);

  return `mailto:${BRAND.contacts.email}?subject=${subject}&body=${body}`;
}
