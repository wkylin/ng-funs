import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from './find.component';

const routes: Routes = [
    // {path: 'find', component: FindComponent, data: {title: 'Find', isShowTabbar: true}}
    {path: '', component: FindComponent, data: {title: 'Find', isShowTabbar: true}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FindRoutingModule {
}
