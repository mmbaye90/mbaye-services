import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-nav" [class.progress-nav-white]="isWhite">
      <ul class="navbar-nav">
        <li *ngFor="let section of sections; let i = index"
            [class.active]="i === activeSection"
            (click)="scrollTo(i)"
            [attr.data-menuanchor]="section.id"></li>
      </ul>
    </div>
  `,
  styles: [`
    .progress-nav {
      position: fixed;
      z-index: 10;
      top: 50%;
      right: 1.5rem;
      transform: translate(0, -50%);
    }
    @media (min-width: 992px) {
      .progress-nav { right: 3rem; }
    }
    .progress-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .progress-nav li {
      position: relative;
      width: 3px;
      height: 30px;
      transition: background-color .3s cubic-bezier(.46,.03,.52,.96);
      background-color: #000;
      cursor: pointer;
    }
    .progress-nav li:before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 3px;
      height: 30px;
      content: '';
      transition: all .3s ease;
      background-color: #D4F21B;
    }
    .progress-nav li.active ~ li:before {
      background-color: #101010;
    }
    .progress-nav-white li.active ~ li:before {
      background-color: #fff;
    }
  `]
})
export class ProgressNavComponent {
  sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'partners', label: 'Partners' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];
  activeSection = 0;
  isWhite = false;
  whiteSectionIds = ['home', 'experience', 'projects', 'testimonials', 'contact'];

  @HostListener('window:scroll', [])
  onScroll(): void {
    const idx = parseInt(document.body.getAttribute('data-active-section') || '0', 10);
    this.activeSection = idx;
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const activeEl = sections[idx];
    this.isWhite = activeEl ? this.whiteSectionIds.includes(activeEl.id) : false;
  }

  scrollTo(index: number): void {
    const el = document.getElementById(this.sections[index].id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
