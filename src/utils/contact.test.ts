import test from 'node:test';
import assert from 'node:assert/strict';
import { getWhatsAppUrl, getMailtoUrl } from './contact.ts';
import { BRAND, LANGUAGES, SupportedLanguage } from '../data/constants.ts';
import { translations } from '../data/translations.ts';

test('BRAND contacts must match official specifications exactly', () => {
  assert.equal(BRAND.contacts.phone, '+213562679104');
  assert.equal(BRAND.contacts.email, 'agency.orvium@gmail.com');
  assert.equal(BRAND.contacts.whatsappBaseUrl, 'https://wa.me/213562679104');
  assert.equal(BRAND.contacts.instagram, 'https://www.instagram.com/orvium.orvium/');
  assert.equal(BRAND.contacts.tiktok, 'https://www.tiktok.com/@orvium');
  assert.equal(BRAND.contacts.facebook, 'https://www.facebook.com/profile.php?id=61596092948817');
});

test('getWhatsAppUrl generates correct link with prefilled language text', () => {
  const arUrl = getWhatsAppUrl('ar');
  assert.ok(arUrl.startsWith('https://wa.me/213562679104?text='));
  assert.ok(decodeURIComponent(arUrl).includes('ORVIUM'));

  const frUrl = getWhatsAppUrl('fr');
  assert.ok(frUrl.startsWith('https://wa.me/213562679104?text='));
  assert.ok(decodeURIComponent(frUrl).includes('Bonjour'));

  const enUrl = getWhatsAppUrl('en');
  assert.ok(enUrl.startsWith('https://wa.me/213562679104?text='));
  assert.ok(decodeURIComponent(enUrl).includes('Hello'));
});

test('getMailtoUrl generates correct mailto link with encoded subject and body', () => {
  const arMail = getMailtoUrl('ar');
  assert.ok(arMail.startsWith('mailto:agency.orvium@gmail.com?subject='));
  assert.ok(arMail.includes('&body='));

  const enMail = getMailtoUrl('en', 'Smart Orders');
  assert.ok(decodeURIComponent(enMail).includes('Smart Orders'));
});

test('Language definitions and flags exist for ar, fr, and en', () => {
  assert.equal(LANGUAGES.ar.dir, 'rtl');
  assert.equal(LANGUAGES.fr.dir, 'ltr');
  assert.equal(LANGUAGES.en.dir, 'ltr');
  assert.equal(LANGUAGES.ar.flag, '🇩🇿');
  assert.equal(LANGUAGES.fr.flag, '🇫🇷');
  assert.equal(LANGUAGES.en.flag, '🇬🇧');
});

test('Translations must have complete parity across all 3 languages', () => {
  const langs: SupportedLanguage[] = ['ar', 'fr', 'en'];

  for (const lang of langs) {
    const t = translations[lang];
    assert.ok(t, `Translations for ${lang} must exist`);
    assert.ok(t.hero.headline.length > 0, `Hero headline in ${lang} must not be empty`);
    assert.equal(t.problems.items.length, 7, `Must have exactly 7 problems in ${lang}`);
    assert.equal(t.services.items.length, 3, `Must have exactly 3 services in ${lang}`);
    assert.equal(t.industries.items.length, 5, `Must have exactly 5 industries in ${lang}`);
    assert.equal(t.process.steps.length, 5, `Must have exactly 5 process steps in ${lang}`);
    assert.equal(t.demonstrations.items.length, 4, `Must have exactly 4 concept demonstrations in ${lang}`);
    assert.equal(t.faq.items.length, 8, `Must have exactly 8 FAQ items in ${lang}`);
    assert.equal(t.about.pillars.length, 6, `Must have exactly 6 pillars in ${lang}`);
  }
});
