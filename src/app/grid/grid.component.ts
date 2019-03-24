import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/image.model';
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

  constructor(private _imageDataService: ImageDataService) {
    this.filterImage$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.countryFilter = val));
  }

  get images$(): Observable<Image[]> {
    return this._fetchImages$
      .pipe
      // filter(i =>
      //   i.values.filter(i => i.name.toLowerCase().startsWith('display'))
      // )
      ();
  }

  ngOnInit() {}
}
