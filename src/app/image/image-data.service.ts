import { Injectable } from '@angular/core';
import { Image } from './image.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  public loadingError$ = new Subject<String>();

  constructor(private http: HttpClient) {}

  get images$(): Observable<Image[]> {
    return this.http.get(`${environment.apiUrl}/images/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      map((list: any[]): Image[] => list.map(Image.fromJson)),
      map(imgs =>
        imgs.filter(img => img.name.toLowerCase().startsWith('display'))
      )
    );
  }

  getImage$(id): Observable<Image> {
    return this.http.get(`${environment.apiUrl}/images/${id}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      map((item: any): Image => Image.fromJson(item))
    );
  }
}
