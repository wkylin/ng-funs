import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PostsService } from '../../services/posts.service';

@Injectable()
export class PostsResolver implements Resolve<any> {
  
  constructor(private pService: PostsService) {
  }
  
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.pService.queryPostsList();
  }
}
