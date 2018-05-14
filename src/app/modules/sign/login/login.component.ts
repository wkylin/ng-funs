import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SlideInOutAnimation } from '../../../router-animations';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [SlideInOutAnimation]
})
export class LoginComponent implements OnInit {
  
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  
  constructor(private authService: AuthService, private http: HttpClient) {
  }
  
  
  
  ngOnInit() {
    this.http.post('https://jsonplaceholder.typicode.com/posts', {title: 'foo', body: 'bar', userId: 1}).subscribe(
      (res) => {
        console.log('Response: ', res);
      },
      (err) => {
        console.log('Error occured: ', err);
      });
  }
  
  login() {
    this.authService.login();
  }
}
