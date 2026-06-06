import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData } from '../models/portfolio.model';
import { SOCIAL_ICONS } from '../utils/social-icons';
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private sanitizer = inject(DomSanitizer);
  private languageService = inject(LanguageService);
  isMenuOpen = false;
  portfolioData?: PortfolioData;
  currentYear = new Date().getFullYear();
  currentLang = this.languageService.getCurrentLang();

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
    });
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  @HostListener('document:keydown.escape', [])
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-is-open', this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.classList.remove('menu-is-open');
  }

  scrollToSection(sectionId: string): void {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getSocialIcon(name: string): SafeHtml {
    const svg = SOCIAL_ICONS[name.toLowerCase()] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  switchLanguage(lang: 'en' | 'fr'): void {
    this.languageService.switchLanguage(lang);
  }
}
