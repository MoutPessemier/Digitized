import { Component, OnInit, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() images: ImageComponent[];

  constructor() {}

  ngOnInit() {
    // document.addEventListener('DOMContentLoaded', function () {
    //   var elems = document.querySelectorAll('.carousel');
    //   var instances = M.Carousel.init(elems);
    // });
  }

  previous() {
    console.log('previous');
  }

  next() {
    console.log('next');
  }
}
