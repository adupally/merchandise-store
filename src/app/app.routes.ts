import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { CartComponent } from './shared/cart/cart.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"home",
        redirectTo:"",
        pathMatch:'full'
    },
    {
        path:"cart",
        component:CartComponent
    }
    
];

