import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  // private _icon: string;
  @Input('image') public image: Image;
  public switch: boolean;

  constructor() {
    // this._icon = 'favorite_border';
    this.switch = true;
  }

  switchToSpecs() {
    this.switch = false;
  }

  switchToComments() {
    this.switch = true;
  }

  ngOnInit() {}

  // like() {
  //   if (this._icon === 'favorite_border') {
  //     this._icon = 'favorite';
  //     this.image.likes++;
  //   } else {
  //     this._icon = 'favorite_border';
  //     this.image.likes--;
  //   }
  // }

  // get icon(): string {
  //   return this._icon;
  // }

  // set icon(value: string) {
  //   this._icon = value;
  // }
}
