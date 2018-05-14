import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from './my.component';
import { IndexComponent } from './index/index.component';
import { SettingComponent } from './setting/setting.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: MyComponent, data: {title: 'My', isShowTabbar: true},
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'index', component: IndexComponent, data: {title: 'MyHome', isShowTabbar: true}
      },
      {
        path: 'setting', component: SettingComponent, data: {title: 'Setting'},
        canDeactivate: [AuthGuard]
      },
      {path: '', redirectTo: 'index', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule {
}
