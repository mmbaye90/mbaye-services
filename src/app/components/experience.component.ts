import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Experience } from '../models/portfolio.model';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
  }
}
