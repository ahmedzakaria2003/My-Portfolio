import { Component } from '@angular/core';

interface SkillCategory {
  icon: string;
  title: string;
  color: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      icon: 'code',
      title: 'Frontend Development',
      color: 'blue',
      skills: ['Angular 18', 'TypeScript', 'HTML5/CSS3', 'Bootstrap', 'jQuery', 'JavaScript', 'ngx-bootstrap', 'RxJS', 'Font-Awesome', 'Toastr', 'ngx-spinner']
    },
    {
      icon: 'layers',
      title: 'Backend Development',
      color: 'emerald',
      skills: ['C#', '.NET', 'Entity Framework Core', 'LINQ', 'RESTful APIs', 'MVC']
    },
    {
      icon: 'database',
      title: 'Database & Storage',
      color: 'orange',
      skills: ['SQL Server', 'Redis']
    },
    {
      icon: 'shield',
      title: 'Authentication',
      color: 'purple',
      skills: ['.NET Core Identity', 'JWT']
    },
    {
      icon: 'cloud',
      title: 'Payment & Integration',
      color: 'cyan',
      skills: ['Stripe' ,'Mada']
    },
    {
      icon: 'git-branch',
      title: 'Architecture & Patterns',
      color: 'pink',
      skills: ['Repository Pattern', 'Specification Pattern','CQRS Pattern']
    }
  ];

  getIconColorClasses(color: string): string {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500 text-white',
      emerald: 'bg-emerald-500 text-white',
      orange: 'bg-orange-500 text-white',
      purple: 'bg-purple-500 text-white',
      cyan: 'bg-cyan-500 text-white',
      pink: 'bg-pink-500 text-white'
    };
    return colors[color] || colors['blue'];
  }

  getSkillColorClasses(color: string): string {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500/20 border border-blue-400/50 text-white hover:bg-blue-500/30 hover:border-blue-400',
      emerald: 'bg-emerald-500/20 border border-emerald-400/50 text-white hover:bg-emerald-500/30 hover:border-emerald-400',
      orange: 'bg-orange-500/20 border border-orange-400/50 text-white hover:bg-orange-500/30 hover:border-orange-400',
      purple: 'bg-purple-500/20 border border-purple-400/50 text-white hover:bg-purple-500/30 hover:border-purple-400',
      cyan: 'bg-cyan-500/20 border border-cyan-400/50 text-white hover:bg-cyan-500/30 hover:border-cyan-400',
      pink: 'bg-pink-500/20 border border-pink-400/50 text-white hover:bg-pink-500/30 hover:border-pink-400'
    };
    return colors[color] || colors['blue'];
  }
}