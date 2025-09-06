import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';

interface Stat {
  title: string;
  value: number; // final value
  current: number; // animated value
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef;
  stats: Stat[] = [
    { title: 'Years of Experience', value: 2, current: 0 },
    { title: 'Repositories', value: 12, current: 0 },
    { title: 'Technologies Mastered', value: 12, current: 0 },
    { title: 'Side Projects', value: 23, current: 0 },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  firstLoad:boolean=true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY >= 100 && this.firstLoad===true) {
      this.firstLoad=false;
      this.onReachedScrollPoint();
    }
  }

  onReachedScrollPoint() {
    this.stats.forEach((stat) => this.animateValue(stat, 1000));
  }

  animateValue(stat: Stat, duration: number) {
    let startTimestamp: number | null = null;
    const startValue = 0;
    const endValue = stat.value;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // calculate interpolated value
      stat.current = Math.floor(progress * (endValue - startValue) + startValue);

      // ✅ force Angular to re-render
      this.cdr.detectChanges();

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
