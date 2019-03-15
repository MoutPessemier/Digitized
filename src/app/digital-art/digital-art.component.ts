import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-art',
  templateUrl: './digital-art.component.html',
  styleUrls: ['./digital-art.component.css']
})
export class DigitalArtComponent implements OnInit {
  private _name: string;
  constructor(/*name: string*/) {
    /*this._name = name;*/
  }

  ngOnInit() {}

  /*get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }*/
}
