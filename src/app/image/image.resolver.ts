import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Image } from './image.model';
import { ImageDataService } from './image-data.service';

@Injectable({
  providedIn: 'root'
})
export class VideoResolver implements Resolve<Image> {
  constructor(private imageService: ImageDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Image> {
    return this.imageService.getImage$(1);
  }
}
