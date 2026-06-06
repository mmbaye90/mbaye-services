import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Skill } from '../models/portfolio.model';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  skills: Skill[] = [];

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }
}
