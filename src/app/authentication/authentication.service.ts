import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<string>;

  constructor(private _http: HttpClient) {
    let parsedToken = this.parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(
      parsedToken && parsedToken.unique_name
    );
  }

  parseJwt(token) {
    if (!token) {
      return null;
    }
    const base64Token = token.split('.')[1];
    const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }

  login(email: string, password: string): Observable<boolean> {
    return this._http
      .post(
        `${environment.apiUrl}/account`,
        { email, password },
        { responseType: 'text' }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(email);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    passwordConfirmation: string,
    country: string = null
  ): Observable<boolean> {
    return this._http
      .post(`${environment.apiUrl}/account/register`, {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        country,
        passwordConfirmation
      })
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(email);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    if (this._user$.getValue) {
      localStorage.removeItem('currentUser');
      this._user$.next(null);
    }
  }
}
