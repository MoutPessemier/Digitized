import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';
import { Observable, Subject } from 'rxjs';
import { ImageDataService } from '../image-data.service';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  filter
} from 'rxjs/operators';

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

  constructor(private _imageDataService: ImageDataService) {}
  // this.filterImage$
  //   .pipe(
  //     distinctUntilChanged(),
  //     debounceTime(400),
  //     map(val => val.toLowerCase())
  //   )
  //   .subscribe(val => (this.countryFilter = val));
  // }

  // get images$(): Observable<Image[]> {
  //   return this._fetchImages$;
  // }

  get images$(): Observable<Image[]> {
    return this._fetchImages$.pipe();
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
      this.rowH = 550;
    } else if (window.innerWidth <= 1050) {
      this.rowH = 450;
    } else {
      this.rowH = 500;
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
      this.rowH = 550;
    } else if (window.innerWidth <= 1050) {
      this.rowH = 450;
    } else {
      this.rowH = 500;
    }
  }
}
