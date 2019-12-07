import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input('image') public image: Image;
  public switch: boolean;

  constructor() {
    this.switch = true;
  }

  switchToSpecs() {
    this.switch = false;
  }

  switchToComments() {
    this.switch = true;
  }

  ngOnInit() {}
}
