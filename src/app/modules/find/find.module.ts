import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindComponent } from './find.component';
import { FindRoutingModule } from './find-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NumberFormatDirective } from '../../directives/number-format.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FindRoutingModule
  ],
  declarations: [
    FindComponent,
    NumberFormatDirective
  ]
})
export class FindModule {
}
