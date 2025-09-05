import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
  sectionCode:number=0;
  categoryCode:number=0;

switchContent(event :Event,code : number){
this.sectionCode=code;
let btn=event.target as HTMLElement;
document.querySelector(".active-section")?.classList.remove("active-section");
btn.classList.add("active-section");
}
switchCategory(event :Event,code : number){
this.categoryCode=code;
let btn=event.target as HTMLElement;
document.querySelector(".active-category")?.classList.remove("active-category");
btn.classList.add("active-category");
}
}
