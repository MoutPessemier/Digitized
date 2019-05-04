import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {
  @Input('image') public image: Image;
  constructor() {}

  ngOnInit() {}
}
