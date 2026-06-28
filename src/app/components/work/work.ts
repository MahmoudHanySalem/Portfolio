import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [NgClass],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  projects = [
    {
      title: 'Artisan Archive — Handmade Marketplace',
      role: 'UI/UX & Frontend Developer',
      description:
        'A bilingual e-commerce and freelance platform connecting Egyptian artisans with buyers, built with Next.js 16 and Laravel 13. Features a product marketplace, custom commission system, real-time chat via WebSockets, social feed, Stripe & PayPal payments, AI chatbot, and full Arabic RTL support—all with a premium, responsive UI powered by shadcn/ui and Tailwind CSS.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
      link: 'https://github.com/MahmoudHanySalem/Artisan-Archive',
      img: 'assets/demo.mp4',
    },
    {
      title: 'Furni- e-commerce platform',
      role: 'Fullstack Developer',
      description:
        'A full-stack e-commerce platform built with ASP.NET Core MVC and SQL Server, featuring Stripe payment integration, dynamic product variants, real-time inventory tracking, and complete order management—all wrapped in a responsive, mobile-friendly interface.',
      technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'Bootstrap', 'SQL Server'],
      link: 'https://github.com/nhahub/NHA-040',
      img: 'assets/Furni.png',
    },
    {
      title: 'SHIEN-CLONE',
      role: 'Frontend Developer',
      description:
        'A e-commerce frontend inspired by Shein, developed using Angular and Bootstrap. The project includes dynamic product listings with filtering and sorting, reusable UI components, and category-based navigation with routing. Designed with Bootstrap’s grid system, delivering a clean and modern shopping experience.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      link: 'https://github.com/MahmoudHanySalem/SHEIN-clone',
      img: 'assets/shien.png',
    },
    {
      title: 'To-Do List',
      role: 'Fullstack Developer',
      description:
        'A full-stack To-Do List application built using ASP.NET Core for the backend and HTML, CSS, and JavaScript for the frontend. The application allows users to create, edit, and delete tasks. The backend replaces local storage by persisting tasks in a database, ensuring data consistency and scalability',
      technologies: ['.NET Core MVC', 'Bootstrap', 'Database', 'Entity Framework Core'],
      link: 'https://github.com/MahmoudHanySalem/To-Do-List',
      img: 'assets/todo.png',
    },
    {
      title: ' Space-Tourism Website',
      role: 'Frontend Developer',
      description:
        'a multi-page frontend application designed to provide an immersive and interactive experience for users interested in space tourism. Interactive navigation between pages. Dynamic content updates based on user interaction.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Json'],
      link: 'https://github.com/MahmoudHanySalem/space-tourism-website',
      img: 'assets/space.png',
    },
  ];
  currentIndex = 0;
  showTop = true;

  toggleTop() {
    this.showTop = !this.showTop;
  }
  isVideo(path: string): boolean {
    return /\.(mp4|webm|ogg|mov)$/i.test(path);
  }

  animateState = false;

  triggerAnimation() {
    this.animateState = !this.animateState;
  }

  prevProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.triggerAnimation();
  }
  
  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.triggerAnimation();
  }

  
}
