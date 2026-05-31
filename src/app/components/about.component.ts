import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData } from '../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  portfolioData?: PortfolioData;

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
    });
  }
}
