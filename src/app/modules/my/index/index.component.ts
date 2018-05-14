import { Component, HostBinding, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../../router-animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
  avatar_url: string;
  name: string;
  location: string;
  blog: string;
  html_url: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [SlideInOutAnimation]
})
export class IndexComponent implements OnInit {
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  userInfo: UserResponse;

  isLogin = false;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit() {
    this.isLogin = this.authService.isAuthenticated();
    if (this.isLogin) {
      this.getUserResponse();
    }
  }

  signIn() {
    this.router.navigate(['/sign/login']);
  }

  getUserResponse() {
    // noinspection JSIgnoredPromiseFromCall
    this.http.get<UserResponse>('https://api.github.com/users/wkylin').subscribe(
      (data) => {
        this.userInfo = data;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error occured', err.error.message);
        } else {
          console.log('Server-side Error occured', err.status);
        }
      });
  }
}
