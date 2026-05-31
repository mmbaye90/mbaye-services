import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { BlogPost } from '../models/portfolio.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  blogPosts: BlogPost[] = [];

  ngOnInit(): void {
    this.blogPosts = this.portfolioService.getBlogPosts();
  }
}
