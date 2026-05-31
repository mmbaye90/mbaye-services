export interface Experience {
  id: string;
  year: string;
  company: string;
  description: string;
  link?: string;
  logo?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  text: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  link?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface PortfolioData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
  };
  about: {
    specialization: string;
    description: string;
    specializations: string[];
    yearsExperience: number;
    image: string;
  };
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  contact: ContactInfo;
  socialMedia: {
    name: string;
    icon: string;
    url: string;
  }[];
  partners: {
    name: string;
    logo: string;
  }[];
}
