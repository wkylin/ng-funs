import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { EventBusService } from '../../services/event-bus.service';
import { WelcomePipe } from '../../pipes/welcome.pipe';
import { RepeatPipe } from '../../pipes/repeat.pipe';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    WelcomePipe,
    RepeatPipe,
    NotFoundComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent,
    WelcomePipe,
    RepeatPipe
  ],
  providers: [
    EventBusService
  ],
  entryComponents: []
})
export class SharedModule {
}
