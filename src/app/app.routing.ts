import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { DetailActiviteComponent } from './detail-activite/detail-activite.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',      component: HomeComponent },
    { path: 'activite/:id',      component: DetailActiviteComponent },
    { path: 'signup',      component: SignupComponent },
    { path: 'signin',      component: SigninComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
