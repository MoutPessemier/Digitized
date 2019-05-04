import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './AuthenticationInterceptors';

export const httpInterceptorProviders = [
  //alle verschillende interceptors
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true //constante meerdere malen gebruiken
  }
];
