import { Video } from './video.model';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { VideoDataService } from './video-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoResolver implements Resolve<Video> {
  constructor(private videoService: VideoDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Video> {
    return this.videoService.getVideo(1);
  }
}
