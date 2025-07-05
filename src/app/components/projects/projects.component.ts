import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  color: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Full-Stack E-Commerce Platform',
      description: 'Comprehensive e-commerce platform built with .NET 8 and Angular, featuring Onion Architecture for clean separation of concerns.',
      longDescription: 'Developed a full-stack e-commerce platform using .NET 8 (Onion Architecture) and Angular, supporting a clean separation of concerns across layers. Integrated SQL Server and Redis for persistent and cache storage, and implemented secure payment processing with Stripe. Followed best practices using Repository, Unit of Work, and Specification patterns, with enhanced UX through custom middleware and toast notifications.',
      icon: 'shopping-cart',
      image: '../../../assets/Screenshot 2025-07-04 231128.png',
      technologies: ['.NET 8', 'Angular', 'SQL Server', 'Redis', 'Stripe', 'JWT', 'Onion Architecture'],
      features: [
        'Multi-step checkout process',
        'Product filtering and search functionality',
        'Wishlist and cart management',
        'JWT-based authentication system',
        'Repository & Unit of Work patterns',
        'Specification pattern implementation',
        'Custom middleware for enhanced UX',
        'Toast notifications for user feedback',
        'Secure payment processing with Stripe',
        'Redis caching for improved performance'
      ],
      github: 'https://github.com/ahmedzakaria2003/fulstack_Ecommerce_dotnet_angular',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Gunners Store - Themed Fan Merchandise Platform',
      description: 'Arsenal FC themed merchandise platform built with ASP.NET Core MVC, featuring role-based access and real-time order tracking.',
      longDescription: 'Designed and developed a fan-themed merchandise web app inspired by Arsenal FC, using ASP.NET Core MVC and SQL Server. The platform supports role-based access (Admin/Customer), Stripe-based secure payments, and a responsive UI built with Bootstrap. Followed a clean N-Tier architecture with Unit of Work pattern for maintainability. Core features include product management, real-time order tracking, and reusable Partial Views.',
      icon: 'gavel',
      image: '../../../assets/Screenshot 2025-07-05 185853.png',
      technologies: ['ASP.NET Core MVC', 'SQL Server', 'Bootstrap', 'Stripe', 'C#', 'N-Tier Architecture'],
      features: [
        'Role-based access control (Admin/Customer)',
        'Secure Stripe payment integration',
        'Responsive Bootstrap UI design',
        'Real-time order tracking system',
        'Product management system',
        'Clean N-Tier architecture',
        'Unit of Work pattern implementation',
        'Reusable Partial Views',
        'Arsenal FC themed design',
        'Comprehensive admin dashboard'
      ],
      github: 'https://github.com/ahmedzakaria2003/Gunners-Store-MVC',
      color: 'emerald'
    }
  ];

  getColorClasses(color: string): string {
    const colors: { [key: string]: string } = {
      blue: 'border-blue-400 bg-blue-500 text-blue-400',
      emerald: 'border-emerald-400 bg-emerald-500 text-emerald-400'
    };
    return colors[color] || colors['blue'];
  }
}