import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private _likes: number;
  private _icon: string;
  @Input() public country: string;

  constructor(/*country:string*/) {
    this._likes = 0;
    this._icon = 'favorite_border';
    /*this._country = country;*/
  }

  ngOnInit() {}

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

  get likes(): number {
    return this._likes;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  /*get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }*/
}
