import { Injectable } from '@angular/core';
import { Image } from 'src/image.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  constructor(private http: HttpClient) {}

  get images$(): Observable<Image[]> {
    return this.http.get(`${environment.apiUrl}/images/`).pipe(
      map((list: any[]): Image[] => list.map(Image.fromJson)),
      map(imgs =>
        imgs.filter(img => img.name.toLowerCase().startsWith('display'))
      )
    );
  }
}
