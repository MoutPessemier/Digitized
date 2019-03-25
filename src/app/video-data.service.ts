import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Video } from 'src/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  get videos$(): Observable<Video[]> {
    return this.http
      .get(`${environment.apiUrl}/videos/`)
      .pipe(map((list: any[]): Video[] => list.map(Video.fromJson)));
  }
}
