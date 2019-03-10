import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private _likes = 0;
  private _icon: string;
  constructor() {
    this._icon = 'favorite_border';
  }

  ngOnInit() {}

  switch() {
    let content = document.getElementsByClassName('content');
  }

  like() {
    if (this._icon === 'favorite_border') {
      this._likes++;
      this._icon = 'favorite';
    } else {
      this._likes--;
      this._icon = 'favorite_border';
    }
    console.log(this._likes);
    console.log(this._icon);
  }

  get likes() {
    return this._likes;
  }

  get icon() {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
