import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FadeInAnimation } from '../../router-animations';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [FadeInAnimation]
})
export class ProductComponent implements OnInit, OnDestroy {

  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  sequentialFoods: any = {};
  movies: any = [];
  foods: any = [];
  books: any = [];

  books$: Subscription;
  movies$: Subscription;
  foods$: Subscription;
  subscriptions$: Subscription[] = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    // this.queryFoods();
    this.queryBooksAndFood();
    this.queryMovies();
    this.queryFoodsSeq();
  }

  ngOnDestroy() {
    /*this.subscriptions$.forEach(s => {
      s.unsubscribe();
    });*/
  }

  queryFoods() {
    this.postsService.queryFoodList().subscribe(
      event => {
        console.log('event', event);
        console.log(event['name']);
        /*if (event['type'] === HttpEventType.DownloadProgress) {
          console.log("Download progress event", event);
        }
        if (event['type']=== HttpEventType.UploadProgress) {
          console.log("Upload progress event", event);
        }
        if (event['type'] === HttpEventType.Response) {
          console.log("response received...", event['body']);
        }*/
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      });
  }

  queryBooksAndFood() {
    this.books$ = this.postsService.parallelRequests().subscribe(
      res => {
        console.log(res);
        this.books = res[0];
        this.foods = res[1];
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      });
    this.subscriptions$.push(this.books$);
  }

  queryFoodsSeq() {
    this.foods$ = this.postsService.sequentialRequests().subscribe(
      res => {
        console.log(res);
        this.sequentialFoods = res;
      },
      err => {
        console.log(err);
      });

    this.subscriptions$.push(this.foods$);
  }

  queryMovies() {
    this.movies$ = this.postsService.queryMoviesList().subscribe(
      res => {
        console.log(res);
        this.movies = res;
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      });
    this.subscriptions$.push(this.movies$);
  }
}
