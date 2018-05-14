import { Http, Headers, ConnectionBackend, XHRBackend, RequestOptions, RequestOptionsArgs, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthHttp extends Http {
  router: Router;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, router: Router) {
    super(backend, defaultOptions);
    this.router = router;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    options = this.addHeader(url, options);
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.addHeader(url, options);
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.addHeader(url, options);
    return this.intercept(super.post(url, body, options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.addHeader(url, options);
    return this.intercept(super.put(url, body, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.addHeader(url, options);
    return this.intercept(super.delete(url, options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    options = this.addHeader(url, options);
    return this.intercept(super.patch(url, body, options));
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return <Observable<Response>> observable.catch((error, source) => {
      if (error.status === 401) {
        // console.log("token失效");
        // this.router.navigate(['login']);
      }
      return Observable.throw(error);
    });
  }

  addHeader(url: string | Request, options?: RequestOptionsArgs): RequestOptionsArgs {
    const gettoken = sessionStorage.getItem('authenticationtoken');
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        options = new RequestOptions({});
        const authHeader = new Headers();
        options.headers = authHeader;
      }
      if (!options.headers) {
        const authHeader = new Headers();
        options.headers = authHeader;
      }
      if (!options.headers) {
        const authHeader = new Headers();
        options.headers = authHeader;
      }
      options.headers.set('Authorization', gettoken);
    } else {
      url.headers.set('Authorization', gettoken);
    }
    return options;
  }
}

export function authHttpFactory(backend: XHRBackend, defaultOptions: RequestOptions, router: Router) {
  return new AuthHttp(
    backend,
    defaultOptions,
    router
  );
}

export function authHttpProvider() {
  return {
    provide: Http,
    useFactory: authHttpFactory,
    deps: [
      XHRBackend,
      RequestOptions,
      Router
    ]
  };
}
