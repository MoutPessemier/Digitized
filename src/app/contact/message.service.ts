import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from './message.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public loadingError$ = new Subject();
  constructor(private _http: HttpClient) {}

  postMessage(message: Message): Observable<boolean> {
    return this._http.post<boolean>(`${environment.apiUrl}/Contact/`, message.toJSON());
  }
}
