import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';


import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingCache } from './app-routing.cache';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
// import { LoadingModule } from 'ngx-loading';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { SharedModule } from './modules/shared/shared.module';
import { AppCustomPreloading } from './common/my-preloading-strategy';
import { AuthGuard } from './guards/auth.guard';
import { GithubAuthInterceptor } from './services/githubauth.interceptor';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    // BrowserModule,
    BrowserModule.withServerTransition({appId: 'ng-funs'}),
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    // LoadingModule,
    LoadingBarRouterModule,
    ConfirmDialogModule,
    ServiceWorkerModule.register('/ng-funs/ngsw-worker.js', {enabled: environment.production})  // ngh
    // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})  // dev
  ],
  providers: [
    AppCustomPreloading,
    AuthService,
    PostsService,
    ConfirmationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubAuthInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: RouteReuseStrategy,
      useClass: AppRoutingCache
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
