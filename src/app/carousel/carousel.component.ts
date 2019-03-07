import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
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
