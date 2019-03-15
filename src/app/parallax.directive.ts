import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio: number = 1;
  initializeTop: number = 0;

  constructor(private eleRef: ElementRef) {
    this.initializeTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.top =
      this.initializeTop - window.scrollY * this.parallaxRatio + 'px';
  }
}
