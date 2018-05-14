import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(public router: Router) {
  }

  public login() {
    const authResult = {
      expiresIn: 60,
      accessToken: '522adcf979fd8159216b52ab7cf195245a80d1aa'
    };
    this.setSession(authResult);
    this.router.navigate(['/my/index']);
  }

  private setSession(authResult): void {
    // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    // localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    // localStorage.removeItem('expires_at');
    this.router.navigate(['/sign/login']);
  }

  public isAuthenticated(): boolean {
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
    const accessToken = localStorage.getItem('access_token');
    return accessToken ? true : false;
  }

  canLoad(): boolean {
    // Http调用后端的服务检查授权
    return true;
  }

  canActivate(): boolean {
    // Http调用后端的服务检查授权

    const isLogin = localStorage.getItem('access_token') ? true : false;

    if (!isLogin) {
      this.router.navigate(['/sign/login']);
    }

    return isLogin;
    // return true;
  }

  canDeactivate(): boolean {
    const isSave = window.confirm('Do you really want to cancel?');
    return isSave;
  }
}
