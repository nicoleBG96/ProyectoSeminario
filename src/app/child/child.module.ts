import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Routing
import { ChildRoutingModule } from './child-routing.module';

// Design
import { MaterialModule } from '../material-module/material-module.module';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';
import { ChildRegisterFormComponent } from './forms/child-register-form/child-register-form.component';


@NgModule({
  declarations: [
    ChildRegisterComponent,
    ChildRegisterFormComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ChildRegisterComponent,
    ChildRegisterFormComponent
  ]
})
export class ChildModule { }
