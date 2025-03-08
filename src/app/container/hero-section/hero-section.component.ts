import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'hero-section',
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('counterSection', { static: false }) counterSection!: ElementRef;

  brandsCount: number = 0;
  designersCount: number = 0;
  showsCount: number = 0;
  hasAnimated = false;

  private animateCounter(
    target: number,
    setter: (val: number) => void,
    duration: number = 2000
  ) {
    let start = 0;
    let increment = target / (duration / 16);

    let counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(counter);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounter(100, (val) => (this.brandsCount = val));
          this.animateCounter(20, (val) => (this.designersCount = val));
          this.animateCounter(60, (val) => (this.showsCount = val));
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(this.counterSection.nativeElement);
  }
}
