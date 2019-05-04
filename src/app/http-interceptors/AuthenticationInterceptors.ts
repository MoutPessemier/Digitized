import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>, //request
    next: HttpHandler //effectief versturen
  ): Observable<HttpEvent<any>> {
    if (this.authService.token.length) {
      //hebben we een token?
      const clonedRequest = req.clone({
        //clone het request
        headers: req.headers.set(
          //voeg een header toe met de token
          'Authorization',
          `Bearer ${this.authService.token}`
        )
      });
      return next.handle(clonedRequest); //stuur de token met header
    }
    return next.handle(req); //stuur de token zonder header
  }
}
