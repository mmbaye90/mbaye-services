import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PortfolioData } from '../models/portfolio.model';
import { LanguageService } from './language.service';

const PLACEHOLDER = 'assets/images/placeholder.svg';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private languageService = inject(LanguageService);

  private portfolioDataEn: PortfolioData = {
    hero: {
      title: '<span class="text-primary">Hello,</span> my name is MBAYE',
      subtitle: 'I am a web and mobile application developer and designer',
      description:
        'Crafting and designing robust and scalable web and mobile applications with modern technologies',
      image: 'assets/images/bg/portfolio/myPicture.png',
    },
    about: {
      specialization: 'What I Do',
      description:
        'I am a <br><span class="text-primary">Full-Stack Software Engineer</span> specialized in designing and delivering high-quality web and mobile applications from concept to deployment.',
      specializations: [
        'Enterprise Java Applications',
        'Spring Boot APIs',
        'Angular Frontends',
        'Flutter Mobile Apps',
        'Software Architecture',
      ],
      yearsExperience: 5,
      image: 'assets/images/bg/portfolio/myPicture.png',
    },
    experiences: [
      {
        id: '1',
        year: '2022-2025',
        company: 'Tech Solutions',
        description:
          'Led development of scalable web applications using Angular, Node.js, and PostgreSQL. Architected microservices and mentored junior developers.',
        link: '',
        logo: 'assets/images/placeholder.svg',
      },
      {
        id: '2',
        year: '2020-2022',
        company: 'Digital Agency',
        description:
          'Built responsive web applications and RESTful APIs. Collaborated with design teams to deliver pixel-perfect implementations.',
        link: '',
        logo: 'assets/images/placeholder.svg',
      },
      {
        id: '3',
        year: '2019-2020',
        company: 'StartupLab',
        description:
          'Developed full-stack features from concept to deployment. Introduced CI/CD pipelines and automated testing practices.',
        link: '',
        logo: 'assets/images/placeholder.svg',
      },
    ],
    skills: [
      { name: 'Angular / TypeScript', percentage: 90, category: 'Frontend' },
      { name: 'Node.js / NestJS', percentage: 85, category: 'Backend' },
      { name: 'React / Next.js', percentage: 75, category: 'Frontend' },
      { name: 'MongoDB / PostgreSQL', percentage: 80, category: 'Database' },
      { name: 'Docker / DevOps', percentage: 70, category: 'DevOps' },
      { name: 'UI/UX Design', percentage: 65, category: 'Design' },
    ],
    projects: [
      {
        id: '1',
        title: 'E-Commerce Platform',
        category: 'Fullstack',
        image: 'assets/images/projects/ecommerce.webp',
      },
      {
        id: '2',
        title: 'Dashboard Analytics',
        category: 'Frontend',
        image: 'assets/images/projects/dashboard.webp',
      },
      {
        id: '3',
        title: 'API Gateway',
        category: 'Backend',
        image: 'assets/images/projects/api-gateway.webp',
      },
      {
        id: '4',
        title: 'Mobile App',
        category: 'React Native',
        image: 'assets/images/projects/mobile-app.webp',
      },
      {
        id: '5',
        title: 'Portfolio CMS',
        category: 'Fullstack',
        image: 'assets/images/projects/portfolio-cms.webp',
      },
      {
        id: '6',
        title: 'Cloud Infrastructure',
        category: 'DevOps',
        image: 'assets/images/projects/cloud-infra.webp',
      },
    ],
    testimonials: [
      {
        id: '1',
        author: 'Amanda',
        company: 'Tech Solutions',
        text: 'Mbaye is an exceptional developer who consistently delivers high-quality work. His expertise in fullstack development made our projects a success.',
      },
      {
        id: '2',
        author: 'John',
        company: 'Digital Agency',
        text: 'Working with Mbaye was a great experience. His technical skills and attention to detail are impressive. He truly cares about the quality of his work.',
      },
      {
        id: '3',
        author: 'Sarah',
        company: 'StartupLab',
        text: 'Mbaye brought tremendous value to our team. His ability to understand complex requirements and translate them into efficient code is remarkable.',
      },
      {
        id: '4',
        author: 'David',
        company: 'Freelance Client',
        text: 'I highly recommend Mbaye for any fullstack development project. Professional, reliable, and technically brilliant.',
      },
    ],
    blogPosts: [
      {
        id: '1',
        title: 'Building Scalable Angular Apps',
        category: 'Development',
        date: 'March, 2025',
        image: PLACEHOLDER,
        excerpt:
          'Best practices for structuring large-scale Angular applications with standalone components and signals...',
        link: '#',
      },
      {
        id: '2',
        title: 'Mastering Node.js Performance',
        category: 'Backend',
        date: 'February, 2025',
        image: PLACEHOLDER,
        excerpt:
          'Optimizing Node.js applications for production with clustering, caching, and profiling techniques...',
        link: '#',
      },
      {
        id: '3',
        title: 'Modern CI/CD Pipelines',
        category: 'DevOps',
        date: 'January, 2025',
        image: PLACEHOLDER,
        excerpt:
          'Setting up automated deployment pipelines with Docker, GitHub Actions, and cloud platforms...',
        link: '#',
      },
    ],
    contact: {
      address: 'Paris, FRANCE',
      phone: '(+33) 07 51 82 57 72',
      email: 'mmbaye1@hotmail.fr',
    },
    socialMedia: [
      { name: 'Facebook', icon: 'facebook', url: '#' },
      { name: 'Twitter', icon: 'twitter', url: '#' },
      { name: 'LinkedIn', icon: 'linkedin', url: '#' },
      { name: 'GitHub', icon: 'github', url: '#' },
    ],
    partners: [
      { name: 'Google', logo: PLACEHOLDER },
      { name: 'Microsoft', logo: PLACEHOLDER },
      { name: 'Amazon', logo: PLACEHOLDER },
      { name: 'Apple', logo: PLACEHOLDER },
      { name: 'Meta', logo: PLACEHOLDER },
      { name: 'Netflix', logo: PLACEHOLDER },
    ],
  };

  private portfolioDataFr: PortfolioData = {
    hero: {
      title: '<span class="text-primary">Bonjour,</span> je suis MBAYE',
      subtitle:
        'Développeur et concepteur d\'applications web et mobiles',
      description:
        'Création et conception d\'applications web et mobiles robustes et évolutives avec les technologies modernes',
      image: 'assets/images/bg/portfolio/myPicture.png',
    },
    about: {
      specialization: 'Ce que je fais',
      description:
        'Je suis un <br><span class="text-primary">Ingénieur logiciel Full-Stack</span> spécialisé dans la conception et la livraison d\'applications web et mobiles de haute qualité, du concept au déploiement.',
      specializations: [
        'Applications Java d\'entreprise',
        'APIs Spring Boot',
        'Frontends Angular',
        'Applications mobiles Flutter',
        'Architecture logicielle',
      ],
      yearsExperience: 5,
      image: 'assets/images/bg/portfolio/myPicture.png',
    },
    experiences: [
      {
        id: '1',
        year: '2022-2025',
        company: 'Tech Solutions',
        description:
          'Direction du développement d\'applications web évolutives avec Angular, Node.js et PostgreSQL. Architecture de microservices et mentorat de développeurs juniors.',
        link: '',
        logo: 'assets/images/placeholder.svg',
      },
      {
        id: '2',
        year: '2020-2022',
        company: 'Digital Agency',
        description:
          'Création d\'applications web responsives et d\'API REST. Collaboration avec les équipes de design pour des implémentations pixel-perfect.',
        link: '',
        logo: 'assets/images/placeholder.svg',
      },
      {
        id: '3',
        year: '2019-2020',
        company: 'StartupLab',
        description:
          'Développement de fonctionnalités full-stack du concept au déploiement. Mise en place de pipelines CI/CD et de pratiques de test automatisées.',
        link: '',
        logo: 'assets/images/placeholder.svg',
      },
    ],
    skills: [
      { name: 'Angular / TypeScript', percentage: 90, category: 'Frontend' },
      { name: 'Node.js / NestJS', percentage: 85, category: 'Backend' },
      { name: 'React / Next.js', percentage: 75, category: 'Frontend' },
      { name: 'MongoDB / PostgreSQL', percentage: 80, category: 'Base de données' },
      { name: 'Docker / DevOps', percentage: 70, category: 'DevOps' },
      { name: 'UI/UX Design', percentage: 65, category: 'Design' },
    ],
    projects: [
      {
        id: '1',
        title: 'Plateforme E-Commerce',
        category: 'Fullstack',
        image: 'assets/images/projects/ecommerce.webp',
      },
      {
        id: '2',
        title: 'Analytics Dashboard',
        category: 'Frontend',
        image: 'assets/images/projects/dashboard.webp',
      },
      {
        id: '3',
        title: 'Passerelle API',
        category: 'Backend',
        image: 'assets/images/projects/api-gateway.webp',
      },
      {
        id: '4',
        title: 'Application Mobile',
        category: 'React Native',
        image: 'assets/images/projects/mobile-app.webp',
      },
      {
        id: '5',
        title: 'Portfolio CMS',
        category: 'Fullstack',
        image: 'assets/images/projects/portfolio-cms.webp',
      },
      {
        id: '6',
        title: 'Infrastructure Cloud',
        category: 'DevOps',
        image: 'assets/images/projects/cloud-infra.webp',
      },
    ],
    testimonials: [
      {
        id: '1',
        author: 'Amanda',
        company: 'Tech Solutions',
        text: 'Mbaye est un développeur exceptionnel qui fournit constamment un travail de haute qualité. Son expertise en développement fullstack a fait le succès de nos projets.',
      },
      {
        id: '2',
        author: 'John',
        company: 'Digital Agency',
        text: 'Travailler avec Mbaye a été une excellente expérience. Ses compétences techniques et son souci du détail sont impressionnants. Il se soucie vraiment de la qualité de son travail.',
      },
      {
        id: '3',
        author: 'Sarah',
        company: 'StartupLab',
        text: 'Mbaye a apporté une valeur considérable à notre équipe. Sa capacité à comprendre des exigences complexes et à les traduire en code efficace est remarquable.',
      },
      {
        id: '4',
        author: 'David',
        company: 'Freelance Client',
        text: 'Je recommande vivement Mbaye pour tout projet de développement fullstack. Professionnel, fiable et techniquement brillant.',
      },
    ],
    blogPosts: [
      {
        id: '1',
        title: 'Construire des applications Angular évolutives',
        category: 'Développement',
        date: 'Mars 2025',
        image: PLACEHOLDER,
        excerpt:
          'Bonnes pratiques pour structurer des applications Angular à grande échelle avec des composants standalone et les signaux...',
        link: '#',
      },
      {
        id: '2',
        title: 'Maîtriser les performances Node.js',
        category: 'Backend',
        date: 'Février 2025',
        image: PLACEHOLDER,
        excerpt:
          'Optimisation des applications Node.js pour la production avec le clustering, le caching et les techniques de profilage...',
        link: '#',
      },
      {
        id: '3',
        title: 'Pipelines CI/CD modernes',
        category: 'DevOps',
        date: 'Janvier 2025',
        image: PLACEHOLDER,
        excerpt:
          'Mise en place de pipelines de déploiement automatisés avec Docker, GitHub Actions et les plateformes cloud...',
        link: '#',
      },
    ],
    contact: {
      address: 'Paris, FRANCE',
      phone: '(+33) 07 51 82 57 72',
      email: 'mmbaye1@hotmail.fr',
    },
    socialMedia: [
      { name: 'Facebook', icon: 'facebook', url: '#' },
      { name: 'Twitter', icon: 'twitter', url: '#' },
      { name: 'LinkedIn', icon: 'linkedin', url: '#' },
      { name: 'GitHub', icon: 'github', url: '#' },
    ],
    partners: [
      { name: 'Google', logo: PLACEHOLDER },
      { name: 'Microsoft', logo: PLACEHOLDER },
      { name: 'Amazon', logo: PLACEHOLDER },
      { name: 'Apple', logo: PLACEHOLDER },
      { name: 'Meta', logo: PLACEHOLDER },
      { name: 'Netflix', logo: PLACEHOLDER },
    ],
  };

  private portfolioSubject = new BehaviorSubject<PortfolioData>(this.portfolioDataEn);
  public portfolio$: Observable<PortfolioData> = this.portfolioSubject.asObservable();

  constructor() {
    this.languageService.currentLang$.subscribe(lang => {
      this.portfolioSubject.next(lang === 'fr' ? this.portfolioDataFr : this.portfolioDataEn);
    });
  }

  getPortfolioData(): Observable<PortfolioData> {
    return this.portfolio$;
  }

  getExperiences() {
    return this.portfolioSubject.value.experiences;
  }

  getSkills() {
    return this.portfolioSubject.value.skills;
  }

  getProjects() {
    return this.portfolioSubject.value.projects;
  }

  getTestimonials() {
    return this.portfolioSubject.value.testimonials;
  }

  getBlogPosts() {
    return this.portfolioSubject.value.blogPosts;
  }
}
