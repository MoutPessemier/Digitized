import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/video.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public videos: Video[];

  constructor() {}

  ngOnInit() {}

  previous() {
    console.log('previous');
  }

  next() {
    console.log('next');
  }
}
