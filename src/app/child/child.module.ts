import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Routing
import { ChildRoutingModule } from './child-routing.module';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';


@NgModule({
  declarations: [
    ChildRegisterComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SharedModule
  ],
  exports: [
    ChildRegisterComponent
  ]
})
export class ChildModule { }
