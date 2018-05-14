import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SettingComponent } from '../modules/my/setting/setting.component';

import { ConfirmationService } from 'primeng/components/common/api';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/observer';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild, CanDeactivate<SettingComponent> {

  constructor(private authService: AuthService, private confirmationService: ConfirmationService) {
  }

  /**
   * 验证是否有权限加载一个异步模块
   */
  canLoad() {
    // 在真实的应用里面需要写一个Service到后端去验证权限
    return this.authService.canLoad();
  }

  /**
   * 验证路由是否可以激活
   */
  canActivate() {
    return this.authService.canActivate();
  }


  /**
   * 验证子路由是否可以激活
   */
  canActivateChild() {
    return true;
  }

  /**
   * 验证路由是否可以离开
   * @param {SettingComponent} target
   * @returns {boolean}
   */

  /*canDeactivate(target: SettingComponent) {

    const can = target.hasChanges();
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Deactivation blocked');
      return false;
    }
    return true;

    // return this.authService.canDeactivate();
  }*/

  canDeactivate(target: SettingComponent) {
    const can = target.hasChanges();
    if (can) {
      return true;
    }
    return Observable.create((observer: Observer<boolean>) => {
      this.confirmationService.confirm({
        message: 'You have unsaved changes. Are you sure you want to leave this page?',
        accept: () => {
          observer.next(true);
          observer.complete();
        },
        reject: () => {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}
