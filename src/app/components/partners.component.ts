import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioData } from '../models/portfolio.model';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  portfolioData?: PortfolioData;

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
    });
  }
}
