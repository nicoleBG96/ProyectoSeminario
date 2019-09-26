import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { WrapperComponent } from './wrapper/wrapper.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MaterialModule } from '../material-module/material-module.module';



@NgModule({
  declarations: [WrapperComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MaterialModule
  ],
  exports: [WrapperComponent]
})
export class CoreModule { }
