import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private _icon: string;
  @Input('image') public image: Image;

  constructor() {
    this._icon = 'favorite_border';
  }

  ngOnInit() {}

  like() {
    if (this._icon === 'favorite_border') {
      this._icon = 'favorite';
      this.image.likes++;
    } else {
      this._icon = 'favorite_border';
      this.image.likes--;
    }
    console.log(this._icon);
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
