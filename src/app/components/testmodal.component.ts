import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Testimonial } from '../models/portfolio.model';

@Component({
  selector: 'app-testmodal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testmodal.component.html',
  styleUrls: ['./testmodal.component.scss']
})
export class TestmodalComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  testimonials: Testimonial[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.testimonials = this.portfolioService.getTestimonials();
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
