import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    HomeComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
