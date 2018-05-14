import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '', component: SignComponent, data: {title: 'Sign'},
        children: [
            {path: 'login', component: LoginComponent, data: {title: 'Login'}},
            {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
            {path: '', redirectTo: 'login', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignRoutingModule {
}
