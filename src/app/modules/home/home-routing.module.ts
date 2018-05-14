import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostsResolver } from '../home/posts.reolver';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {title: 'MyHome', isShowTabbar: true},
    resolve: {
      posts: PostsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PostsResolver
  ]
})
export class HomeRoutingModule {
}
