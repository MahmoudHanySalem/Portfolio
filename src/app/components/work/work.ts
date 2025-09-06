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
  prevProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }
  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  
}
