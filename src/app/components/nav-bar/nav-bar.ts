import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  links: HTMLElement[] = [];

  ngAfterViewInit() {
    // DOM is ready
    this.links = Array.from(document.querySelectorAll('.nav-link'));
  }

  activatePage(event: Event,red ?: HTMLElement) {
    let link;
    if(red?.id ==="hire-me"){
      link = this.links.filter(ele => ele.innerHTML === "Contact")[0];
    }
    else if(red?.id ==="logo-link"){
      link = this.links.filter(ele => ele.innerHTML === "Home")[0];
    }
    else{
      link = event.target as HTMLElement;
    }

    this.links.forEach(ele => ele.classList.remove('active'));
    link.classList.add('active');
  }
}
