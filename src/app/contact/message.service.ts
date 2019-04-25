import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from './message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private _http: HttpClient) {}

  sendMessage(message: Message): Observable<boolean> {
    return this._http.post<boolean>(
      `${environment.apiUrl}/Contact/`,
      message.toJSON()
    );
  }
}
