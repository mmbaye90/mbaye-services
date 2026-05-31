import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PortfolioData } from '../models/portfolio.model';

const PLACEHOLDER = 'assets/images/placeholder.svg';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioData: PortfolioData = {
    hero: {
      title: '<span class="text-primary">Hello,</span> my name is Mbaye.',
      subtitle: 'I\'m Product Designer',
      description: 'Crafting robust and scalable web applications with modern technologies',
      image: 'assets/images/bg/portfolio/myPicture.png'
    },
    about: {
      specialization: 'My specialization',
      description: 'I am a trending <br><span class=\"text-primary\">designer</span> who cares<br> about the details',
      specializations: [
        'HOME DESIGN',
        'COMMERCIAL DESIGN',
        'PRODUCT DESIGN',
        'WEBSITE DESIGN',
        'LANDSCAPE DESIGN'
      ],
      yearsExperience: 5,
      image: 'assets/images/bg/portfolio/myPicture.png'
    },
    experiences: [
      {
        id: '1',
        year: '2022-2025',
        company: 'Tech Solutions',
        description: 'Led development of scalable web applications using Angular, Node.js, and PostgreSQL. Architected microservices and mentored junior developers.',
        link: '',
        logo: 'assets/images/placeholder.svg'
      },
      {
        id: '2',
        year: '2020-2022',
        company: 'Digital Agency',
        description: 'Built responsive web applications and RESTful APIs. Collaborated with design teams to deliver pixel-perfect implementations.',
        link: '',
        logo: 'assets/images/placeholder.svg'
      },
      {
        id: '3',
        year: '2019-2020',
        company: 'StartupLab',
        description: 'Developed full-stack features from concept to deployment. Introduced CI/CD pipelines and automated testing practices.',
        link: '',
        logo: 'assets/images/placeholder.svg'
      }
    ],
    skills: [
      { name: 'Angular / TypeScript', percentage: 90, category: 'Frontend' },
      { name: 'Node.js / NestJS', percentage: 85, category: 'Backend' },
      { name: 'React / Next.js', percentage: 75, category: 'Frontend' },
      { name: 'MongoDB / PostgreSQL', percentage: 80, category: 'Database' },
      { name: 'Docker / DevOps', percentage: 70, category: 'DevOps' },
      { name: 'UI/UX Design', percentage: 65, category: 'Design' }
    ],
    projects: [
      {
        id: '1',
        title: 'E-Commerce Platform',
        category: 'Fullstack',
        image: 'assets/images/projects/ecommerce.webp'
      },
      {
        id: '2',
        title: 'Dashboard Analytics',
        category: 'Frontend',
        image: 'assets/images/projects/dashboard.webp'
      },
      {
        id: '3',
        title: 'API Gateway',
        category: 'Backend',
        image: 'assets/images/projects/api-gateway.webp'
      },
      {
        id: '4',
        title: 'Mobile App',
        category: 'React Native',
        image: 'assets/images/projects/mobile-app.webp'
      },
      {
        id: '5',
        title: 'Portfolio CMS',
        category: 'Fullstack',
        image: 'assets/images/projects/portfolio-cms.webp'
      },
      {
        id: '6',
        title: 'Cloud Infrastructure',
        category: 'DevOps',
        image: 'assets/images/projects/cloud-infra.webp'
      }
    ],
    testimonials: [
      {
        id: '1',
        author: 'Amanda',
        company: 'Tech Solutions',
        text: 'Mbaye is an exceptional developer who consistently delivers high-quality work. His expertise in fullstack development made our projects a success.'
      },
      {
        id: '2',
        author: 'John',
        company: 'Digital Agency',
        text: 'Working with Mbaye was a great experience. His technical skills and attention to detail are impressive. He truly cares about the quality of his work.'
      },
      {
        id: '3',
        author: 'Sarah',
        company: 'StartupLab',
        text: 'Mbaye brought tremendous value to our team. His ability to understand complex requirements and translate them into efficient code is remarkable.'
      },
      {
        id: '4',
        author: 'David',
        company: 'Freelance Client',
        text: 'I highly recommend Mbaye for any fullstack development project. Professional, reliable, and technically brilliant.'
      }
    ],
    blogPosts: [
      {
        id: '1',
        title: 'Building Scalable Angular Apps',
        category: 'Development',
        date: 'March, 2025',
        image: PLACEHOLDER,
        excerpt: 'Best practices for structuring large-scale Angular applications with standalone components and signals...',
        link: '#'
      },
      {
        id: '2',
        title: 'Mastering Node.js Performance',
        category: 'Backend',
        date: 'February, 2025',
        image: PLACEHOLDER,
        excerpt: 'Optimizing Node.js applications for production with clustering, caching, and profiling techniques...',
        link: '#'
      },
      {
        id: '3',
        title: 'Modern CI/CD Pipelines',
        category: 'DevOps',
        date: 'January, 2025',
        image: PLACEHOLDER,
        excerpt: 'Setting up automated deployment pipelines with Docker, GitHub Actions, and cloud platforms...',
        link: '#'
      }
    ],
    contact: {
      address: 'Dakar, Sénégal',
      phone: '(+221) 77 000 00 00',
      email: 'mbaye.dev@gmail.com'
    },
    socialMedia: [
      { name: 'Facebook', icon: 'facebook', url: '#' },
      { name: 'Twitter', icon: 'twitter', url: '#' },
      { name: 'LinkedIn', icon: 'linkedin', url: '#' },
      { name: 'GitHub', icon: 'github', url: '#' }
    ],
    partners: [
      { name: 'Google', logo: PLACEHOLDER },
      { name: 'Microsoft', logo: PLACEHOLDER },
      { name: 'Amazon', logo: PLACEHOLDER },
      { name: 'Apple', logo: PLACEHOLDER },
      { name: 'Meta', logo: PLACEHOLDER },
      { name: 'Netflix', logo: PLACEHOLDER }
    ]
  };

  private portfolioSubject = new BehaviorSubject<PortfolioData>(this.portfolioData);
  public portfolio$: Observable<PortfolioData> = this.portfolioSubject.asObservable();

  constructor() {}

  getPortfolioData(): Observable<PortfolioData> {
    return this.portfolio$;
  }

  getExperiences() {
    return this.portfolioData.experiences;
  }

  getSkills() {
    return this.portfolioData.skills;
  }

  getProjects() {
    return this.portfolioData.projects;
  }

  getTestimonials() {
    return this.portfolioData.testimonials;
  }

  getBlogPosts() {
    return this.portfolioData.blogPosts;
  }
}
