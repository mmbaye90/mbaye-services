import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ExperienceComponent } from './components/experience.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { TestmodalComponent } from './components/testmodal.component';
import { BlogComponent } from './components/blog.component';
import { ContactComponent } from './components/contact.component';
import { PartnersComponent } from './components/partners.component';
import { FooterComponent } from './components/footer.component';
import { ProgressNavComponent } from './components/progress-nav.component';
import { ToastComponent } from './components/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    TestmodalComponent,
    BlogComponent,
    ContactComponent,
    PartnersComponent,
    FooterComponent,
    ProgressNavComponent,
    ToastComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit(): void {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    let lastActiveIndex = -1;

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let mostVisible: Element | null = null;

      entries.forEach(entry => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisible = entry.target as HTMLElement;
        }
      });

      if (mostVisible) {
        const el = mostVisible as HTMLElement;
        const idx = Array.from(sections).indexOf(el);
        if (idx !== lastActiveIndex) {
          lastActiveIndex = idx;

          document.querySelectorAll('section .intro').forEach(el2 => el2.classList.remove('animate'));
          document.querySelectorAll('section').forEach(s => s.classList.remove('active'));

          const intro = el.querySelector('.intro') as HTMLElement | null;
          if (intro) intro.classList.add('animate');
          el.classList.add('active');

          document.body.setAttribute('data-active-section', String(idx));
        }
      }
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });

    setTimeout(() => {
      sections.forEach(section => observer.observe(section));
      document.querySelectorAll('section .intro').forEach(el => el.classList.remove('animate'));
    });
  }
}
