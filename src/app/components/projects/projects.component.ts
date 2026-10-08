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
  github?: string;
  liveDemo?: string;
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
      title: 'Tawsela Kids – School Bus Fleet & Tracking Platform',
      description: 'Enterprise real-time school bus fleet management and student tracking platform featuring live GPS geofencing, WebRTC audio/video calls, instant chat, and offline PWA.',
      longDescription: 'Developed an end-to-end smart school bus fleet and student safety tracking platform using ASP.NET Core and Angular. Designed to deliver complete peace of mind to parents and efficient logistics to school administrators, the system features real-time vehicle telemetry via SignalR, interactive Leaflet maps with live route navigation, and automated geofence entry/exit alerts. It incorporates two-way WebRTC peer-to-peer audio and video calling supported by Coturn (STUN/TURN) servers for direct communication between parents and drivers, accompanied by an instant SignalR chat system. The solution also automates student attendance tracking, planned absence logging, and delegated guardian pickup authorizations. Built with Clean Architecture, CQRS (MediatR), offline-first PWA capabilities with Service Workers, background WebPush notifications, and thoroughly verified with comprehensive xUnit and Moq unit testing suites.',
      icon: 'map-pin',
      image: '../../../assets/tawselakids.png',
      technologies: ['Angular', 'ASP.NET Core', 'SignalR', 'SQL Server', 'EF Core', 'WebRTC', 'Leaflet', 'PWA', 'WebPush', 'MediatR', 'CQRS', 'xUnit & Moq', 'Clean Architecture'],
      features: [
        'Live bus GPS tracking & route visualization with Leaflet',
        'Real-time bus telemetry & speed broadcasts via SignalR',
        'Automated school & home geofence alerts',
        'Peer-to-peer WebRTC audio & video calling with Coturn (STUN/TURN)',
        'Real-time instant chat system between parents & drivers',
        'Student absence management & attendance history',
        'Delegated guardian pickup authorization workflows',
        'Offline-first Progressive Web App (PWA) with Service Workers',
        'Background WebPush notification engine',
        'Role-Based Access Control (Parents, Drivers, School Admins)',
        'Clean Architecture & CQRS pattern with MediatR',
        'Comprehensive unit tests with xUnit & Moq'
      ],
      liveDemo: 'https://tawselakids.com',
      color: 'orange'
    },
    {
      id: 2,
      title: 'Full-Stack Real-Time Auction System',
      description: 'Advanced real-time auction platform with live bidding, secure payments, and comprehensive role-based management.',
      longDescription: 'Developed a sophisticated full-stack real-time auction platform using ASP.NET Core (backend) and Angular (frontend). The system features real-time bidding capabilities with SignalR for instant updates and synchronized countdown timers. Integrated secure payment processing with Stripe for deposits and final payments, while implementing robust authentication using JWT + Refresh Tokens and 2FA (OTP) for enhanced security. The platform supports comprehensive Role-Based Access Control for Bidders, Sellers, and Administrators with advanced search and filtering capabilities.',
      icon: 'gavel',
      image: '../../../assets/Screenshot 2025-08-22 192449.png',
      technologies: ['Angular', 'ASP.NET Core', 'SignalR', 'EF Core', 'Redis', 'Stripe', 'JWT', 'Bootstrap', '2FA (OTP)', 'Clean Architecture'],
      features: [
        'Real-time bidding with SignalR integration',
        'Synchronized countdown timers across clients',
        'Secure Stripe payment processing',
        'JWT + Refresh Tokens authentication',
        'Two-Factor Authentication (2FA/OTP)',
        'Role-Based Access Control (Bidder/Seller/Admin)',
        'Advanced search and filtering system',
        'Lazy loading for optimal performance',
        'Redis caching for improved speed',
        'Responsive Bootstrap UI design',
        'Repository & Unit of Work patterns',
        'Specification Pattern for efficient queries'
      ],
      github: 'https://github.com/ahmedzakaria2003/Auction-System',
      color: 'gold'
    },
    {
      id: 3,
      title: 'Full-Stack E-Commerce Platform',
      description: 'Comprehensive e-commerce platform built with ASP.NET Core and Angular, featuring Clean Architecture for clean separation of concerns.',
      longDescription: 'Developed a full-stack e-commerce platform using ASP.NET Core (Clean Architecture) and Angular, supporting a clean separation of concerns across layers. Integrated SQL Server and Redis for persistent and cache storage, and implemented secure payment processing with Stripe. Followed best practices using Repository, Unit of Work, and Specification patterns, with enhanced UX through custom middleware and toast notifications.',
      icon: 'shopping-cart',
      image: '../../../assets/Screenshot 2025-07-04 231128.png',
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'Redis', 'Stripe', 'JWT', 'Clean Architecture'],
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
      id: 4,
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
      blue: 'border-blue-400 bg-blue-500 text-white',
      emerald: 'border-emerald-400 bg-emerald-500 text-white',
      gold: 'border-yellow-400 bg-yellow-500 text-white',
      orange: 'border-orange-400 bg-orange-500 text-white'
    };
    return colors[color] || colors['blue'];
  }
}
