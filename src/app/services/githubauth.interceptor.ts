import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

// https://github.com/settings/tokens
// https://scotch.io/@kashyapmukkamala/using-http-interceptor-with-angular2
// https://github.com/mpalourdio/ng-http-loader

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    let authReq: HttpRequest<any>;
    if (token) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'token 522adcf979fd8159216b52ab7cf195245a80d1aa')
      });
    } else {
      authReq = req;
    }
    console.log(authReq);
    const started = Date.now();
    return next.handle(authReq).do(
      (event: any) => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log('401');
          }
        }
      });
  }
}
