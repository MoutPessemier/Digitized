import { Component, OnInit, Input } from '@angular/core';
import { DigitalArtComponent } from '../digital-art/digital-art.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() digitalArt: DigitalArtComponent[];

  constructor() {}

  ngOnInit() {}
}
