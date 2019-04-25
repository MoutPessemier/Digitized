import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Video } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  get videos$(): Observable<Video[]> {
    return this.http.get(`${environment.apiUrl}/videos/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): Video[] => list.map(Video.fromJson))
    );
  }

  getVideo$(id: number): Observable<Video> {
    return this.http
      .get(`${environment.apiUrl}/videos/${id}`)
      .pipe(map((item: any): Video => Video.fromJson(item)));
  }
}
