import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-spec-list',
  templateUrl: './spec-list.component.html',
  styleUrls: ['./spec-list.component.css']
})
export class SpecListComponent implements OnInit {
  @Input('image') image: Image;

  constructor() {}

  ngOnInit() {}
}
