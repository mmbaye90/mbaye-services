import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Lang = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang = new BehaviorSubject<Lang>('en');
  currentLang$ = this.currentLang.asObservable();

  private translations: Record<string, Record<string, string>> = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.partners': 'Partners',
      'nav.testimonials': 'Testimonials',
      'nav.blog': 'News',
      'nav.contact': 'Contact',
      'nav.cv': 'CV',
      'nav.closeMenu': 'Close menu',
      'nav.openMenu': 'Open menu',
      'hero.years': 'YEARS',
      'hero.experience': 'EXPERIENCE',
      'hero.working': 'WORKING',
      'exp.title': 'Experience',
      'skills.title': 'My mission is',
      'skills.title.highlight': 'develop',
      'skills.title.end': 'best design',
      'skills.desc':
        'I will help you build your brand and grow your business. I create clarifying strategy, beautiful logo and identity design.',
      'projects.title': 'Latest projects',
      'partners.title': 'Best',
      'partners.title.end': 'Partners',
      'testimonials.title': 'Hey, this is',
      'testimonials.title.highlight': 'testimonials',
      'testimonials.title.end': 'from my best clients & partners',
      'blog.title': 'Journal',
      'blog.viewAll': 'View all',
      'blog.readMore': 'Read more',
      'contact.title': 'Contact',
      'contact.desc':
        "You'll called for yielding male, so lights Stars abundantly, is their.",
      'contact.chat': "Let's grab a coffee and jump on conversation",
      'contact.chat.highlight': 'chat with me.',
      'contact.name': 'Name',
      'contact.email': 'Email *',
      'contact.message': 'Message',
      'contact.sending': 'Sending...',
      'contact.submit': 'Contact me',
      'toast.success': "Message sent successfully! I'll get back to you soon.",
      'toast.failed': 'Failed to send.',
      'toast.networkError': 'Network error. Please try again later.',
      'toast.subject': 'Portfolio Contact - New message from',
      'footer.rights': 'All Rights Reserved.',
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.experience': 'Expérience',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.partners': 'Partenaires',
      'nav.testimonials': 'Témoignages',
      'nav.blog': 'Actualités',
      'nav.contact': 'Contact',
      'nav.cv': 'CV',
      'nav.closeMenu': 'Fermer le menu',
      'nav.openMenu': 'Ouvrir le menu',
      'hero.years': 'ANS',
      'hero.experience': "D'EXPÉRIENCE",
      'hero.working': '',
      'exp.title': 'Expérience',
      'skills.title': 'Ma mission est de',
      'skills.title.highlight': 'développer',
      'skills.title.end': 'le meilleur design',
      'skills.desc':
        'Je vous aiderai à construire votre marque et développer votre entreprise. Je crée une stratégie claire, un logo et une identité visuelle de qualité.',
      'projects.title': 'Projets récents',
      'partners.title': 'Meilleurs',
      'partners.title.end': 'Partenaires',
      'testimonials.title': 'Découvrez les',
      'testimonials.title.highlight': 'témoignages',
      'testimonials.title.end':
        'de mes meilleurs clients et partenaires',
      'blog.title': 'Journal',
      'blog.viewAll': 'Tout voir',
      'blog.readMore': 'Lire plus',
      'contact.title': 'Contact',
      'contact.desc':
        "N'hésitez pas à me contacter pour toute question ou collaboration.",
      'contact.chat': 'Prenons un café et discutons',
      'contact.chat.highlight': 'échangeons ensemble.',
      'contact.name': 'Nom',
      'contact.email': 'Email *',
      'contact.message': 'Message',
      'contact.sending': 'Envoi en cours...',
      'contact.submit': 'Me contacter',
      'toast.success':
        'Message envoyé avec succès ! Je vous recontacterai bientôt.',
      'toast.failed': "Échec de l'envoi.",
      'toast.networkError':
        'Erreur réseau. Veuillez réessayer plus tard.',
      'toast.subject': 'Portfolio Contact - Nouveau message de',
      'footer.rights': 'Tous droits réservés.',
    },
  };

  switchLanguage(lang: Lang): void {
    this.currentLang.next(lang);
    document.documentElement.lang = lang;
  }

  translate(key: string): string {
    return this.translations[this.currentLang.value]?.[key] || key;
  }

  getCurrentLang(): Lang {
    return this.currentLang.value;
  }
}
