import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  apiBase = environment.apiBase;

  // headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  getParams = new HttpParams().set('a', '1').set('b', '2');

  constructor(private http: HttpClient) {
  }

  // http request
  queryMoviesList() {
    return this.http.request('get', this.apiBase + '/api/movies');
  }

  // http get
  queryPostsList() {
    // let httpGet = this.http.get('api/posts', {observe: 'response'}); // 完整的响应信息
    const getPosts = this.http.get(this.apiBase + '/api/posts', {
      headers: this.headers,
      observe: 'body',
      params: this.getParams,
      responseType: 'json',
      withCredentials: false
    }); // 只有响应体
    return getPosts;
    // return getPosts.shareReplay(); // 避免重复请求
    // return getPosts.delay(1000).retry(10);
  }

  // http post
  queryFoodList() {
    const postFood = this.http.post(this.apiBase + '/api/foods', {'id': '4', 'name': 'cake'}, {
      headers: this.headers,
      observe: 'body',
      reportProgress: true,
      responseType: 'json',
      withCredentials: true
    }); // 只有响应体
    return postFood;
  }

  // 并行发送多个请求
  parallelRequests() {
    return Observable.forkJoin(
      this.http.get(this.apiBase + '/api/books'),
      this.http.get(this.apiBase + '/api/foods')
    );
  }

  // 顺序发送 Http 请求
  sequentialRequests() {
    const swq$ = this.http.get(this.apiBase + '/api/movies').mergeMap(posts => {
      posts[0]['title'] += ' Sequential';
      return this.http.post(this.apiBase + '/api/foods', {'name': posts[0]['title']});
    });
    return swq$;
  }
}
