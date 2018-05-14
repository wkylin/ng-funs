import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PostsService } from '../../services/posts.service';
import { MyAnimation, ListAnimation } from './item.animations';
import { FadeInAnimation } from '../../router-animations';

import { Subscription } from 'rxjs/Subscription';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation, ListAnimation, FadeInAnimation]
})
export class HomeComponent implements OnInit, OnDestroy {

  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  environmentName: string = environment.envName;
  apiBase: string = environment.apiBase;
  state = 'small';
  posts: any = [];
  offline = '';

  posts$: Subscription;

  constructor(private postsService: PostsService, private meta: Meta, private title: Title, private route: ActivatedRoute) {

    title.setTitle('My Home Page');
    meta.addTags([
      {name: 'author', content: 'wkylin'},
      {name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      {name: 'description', content: 'This is my Angular SEO-based App, enjoy it!'}
    ]);
  }

  ngOnInit() {
    // this.queryPosts();
    // this.route.data.map((data) => data['posts']).subscribe((posts) => {this.posts = posts['data']; }); // code data
    this.route.data.map((data) => data['posts']).subscribe((posts) => {this.posts = posts; });
    if (!navigator.onLine) {
      this.offline = 'Sorry, you\'re offline';
    }

  }

  ngOnDestroy() {
    // this.posts$.unsubscribe();
  }

  queryPosts() {
    this.posts$ = this.postsService.queryPostsList().subscribe(
      (res) => {
        console.log('data:', res);
        // this.posts = res.body['data'];
        this.posts = res['data'];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      },
      () => {
        console.log('completed');
      }
    );
  }

  pushItem() {
    this.posts.push({
      'id': 1,
      'title': 'Hey this is an item',
      'author': 'wkylin'
    });

    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  removeItem() {
    this.posts.pop();
  }
}
