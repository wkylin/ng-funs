import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRoutingModule } from './my-routing.module';
import { MyComponent } from './my.component';
import { SettingComponent } from './setting/setting.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { ConfirmDialogModule, ConfirmationService, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MyRoutingModule,
    ConfirmDialogModule,
    ButtonModule
  ],
  declarations: [
    MyComponent,
    SettingComponent,
    IndexComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class MyModule {
}
