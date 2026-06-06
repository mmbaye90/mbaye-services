import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData } from '../models/portfolio.model';
import { SOCIAL_ICONS } from '../utils/social-icons';
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private sanitizer = inject(DomSanitizer);
  private languageService = inject(LanguageService);
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

  getSocialIcon(name: string): SafeHtml {
    const svg = SOCIAL_ICONS[name.toLowerCase()] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  switchLanguage(lang: 'en' | 'fr'): void {
    this.languageService.switchLanguage(lang);
  }
}
