import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppCustomPreloading } from './common/my-preloading-strategy';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full', data: {title: 'Home', isShowTabbar: true}},
  {path: 'about', component: AboutComponent, data: {title: 'About', isShowTabbar: true}},
  {
    path: 'sign', data: {title: 'Sign', isShowTabbar: true, preload: false},
    loadChildren: './modules/sign/sign.module#SignModule'
  },
  {
    path: 'home', data: {title: 'Home', isShowTabbar: true, preload: true},
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'product', data: {title: 'Product', isShowTabbar: true, preload: false},
    loadChildren: './modules/product/product.module#ProductModule'
  },
  {
    path: 'find', data: {title: 'Find', isShowTabbar: true, preload: false},
    loadChildren: './modules/find/find.module#FindModule'
  },
  {
    path: 'my', data: {title: 'My', isShowTabbar: true, preload: false},
    loadChildren: './modules/my/my.module#MyModule',
    // canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },

  {path: '**', component: NotFoundComponent, data: {title: 'Not Found', isShowTabbar: true}}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing: true, preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes, {enableTracing: true, preloadingStrategy: AppCustomPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
