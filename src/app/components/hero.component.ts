import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData } from '../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  portfolioData?: PortfolioData;

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
    });
  }
}