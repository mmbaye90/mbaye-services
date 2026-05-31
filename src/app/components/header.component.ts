import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData } from '../models/portfolio.model';
import { SOCIAL_ICONS } from '../utils/social-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private sanitizer = inject(DomSanitizer);
  isMenuOpen = false;
  portfolioData?: PortfolioData;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
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
}
