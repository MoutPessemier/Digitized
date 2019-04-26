import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { Observable, Subject } from 'rxjs';
import { ImageDataService } from '../image-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public countryFilter: string;
  public filterImage$ = new Subject<string>();
  private _fetchImages$: Observable<Image[]> = this._imageDataService.images$;
  public breakpoint: number;
  public rowH: number;
  public loadingErrors$ = this._imageDataService.loadingError$;

  constructor(private _imageDataService: ImageDataService) {}

  get images$(): Observable<Image[]> {
    return this._fetchImages$;
  }

  ngOnInit() {
    if (window.innerWidth <= 600) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 1050) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }

    if (window.innerWidth <= 600) {
      this.rowH = 425;
    } else if (window.innerWidth <= 1050) {
      this.rowH = 350;
    } else {
      this.rowH = 400;
    }
  }

  onResize(event) {
    if (window.innerWidth <= 600) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 1050) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }

    if (window.innerWidth <= 600) {
      this.rowH = 425;
    } else if (window.innerWidth <= 1050) {
      this.rowH = 350;
    } else {
      this.rowH = 400;
    }
  }
}
