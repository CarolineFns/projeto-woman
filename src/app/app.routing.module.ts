import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './core/signin/signin.component';
import { SignUpComponent } from './core/signup/signup.component';
import { AulasComponent } from './core/aulas/aulas.component';

const routes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'aulas', component: AulasComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [  
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
