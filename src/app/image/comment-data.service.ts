import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment.model';
import { Subject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentDataService {
  public loadingError$ = new Subject<string>();
  constructor(private http: HttpClient) {}

  getComments$(imageId: number): Observable<Comment[]> {
    return this.http.get(`${environment.apiUrl}/images/${imageId}/comments`).pipe(
      catchError(error => {
        this.loadingError$.next(error);
        return of();
      }),
      map((list: any[]): Comment[] => list.map(Comment.fromJSON))
    );
  }

  getComment$(imageId: number, id: number): Observable<Comment> {
    return this.http.get(`${environment.apiUrl}/images/${imageId}/comments/${id}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      map((item: any): Comment => Comment.fromJSON(item))
    );
  }

  postComment(imageId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/images/${imageId}/comments`, comment.toJSON());
  }

  putComment(imageId: number, id: number, comment: Comment) {
    return this.http.put(`${environment.apiUrl}/images/${imageId}/comments/${id}`, comment.toJSON());
  }

  deleteComment(imageId: number, id: number) {
    return this.http.delete(`${environment.apiUrl}/images/${imageId}/comments/${id}`);
  }
}
