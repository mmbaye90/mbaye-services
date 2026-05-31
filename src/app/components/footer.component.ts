import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData } from '../models/portfolio.model';
import { SOCIAL_ICONS } from '../utils/social-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private sanitizer = inject(DomSanitizer);
  portfolioData?: PortfolioData;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
    });
  }

  getSocialIcon(name: string): SafeHtml {
    const svg = SOCIAL_ICONS[name.toLowerCase()] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
