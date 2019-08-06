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
import { EditRegisterChildComponent } from './register/edit-register-child/edit-register-child.component';
import { RegisterChildMedicalRecordComponent } from './medicalRecord/register-child-medical-record/register-child-medical-record.component';


@NgModule({
  declarations: [
    ChildRegisterComponent,
    ChildRegisterFormComponent,
    EditRegisterChildComponent,
    RegisterChildMedicalRecordComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ChildRegisterComponent,
    ChildRegisterFormComponent,
    EditRegisterChildComponent,
    RegisterChildMedicalRecordComponent
  ]
})
export class ChildModule { }
