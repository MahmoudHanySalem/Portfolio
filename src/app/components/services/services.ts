import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements AfterViewInit{
    links: HTMLElement[] = [];

  ngAfterViewInit() {
    this.links = Array.from(document.querySelectorAll('.nav-link'));
  }
activatePage(event: Event,red ?: HTMLElement) {
    this.links.forEach(ele => ele.classList.remove('active'));
    this.links[this.links.length - 1].classList.add('active');
  }

}
