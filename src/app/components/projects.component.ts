import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Project } from '../models/portfolio.model';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  projects: Project[] = [];
  activeBgIndex = 0;
  projectBgs = [
    'assets/images/projects/ecommerce.webp',
    'assets/images/projects/dashboard.webp',
    'assets/images/projects/api-gateway.webp',
    'assets/images/projects/mobile-app.webp',
    'assets/images/projects/portfolio-cms.webp',
    'assets/images/projects/cloud-infra.webp'
  ];

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

  changeBg(index: number): void {
    this.activeBgIndex = index % this.projectBgs.length;
  }
}
