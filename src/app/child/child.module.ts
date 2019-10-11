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
import { ChildMedicalRecordFormComponent } from './forms/child-medical-record-form/child-medical-record-form.component';
import { RegisterChildProgressComponent } from './progress/register-child-progress/register-child-progress.component';
import { ChildProgressFormComponent } from './forms/child-progress-form/child-progress-form.component';
import { RegisterListComponent } from './register/register-list/register-list.component';
import { MedicalRecordListComponent } from './medicalRecord/medical-record-list/medical-record-list.component';
import { ProgressListComponent } from './progress/progress-list/progress-list.component';
import { ChildsComponent } from './interfaces/childs/childs.component';
import { ShowRegisterFormComponent } from './register/show-register-form/show-register-form.component';
import { ShowMedicalRecordFormComponent } from './medicalRecord/show-medical-record-form/show-medical-record-form.component';


@NgModule({
  declarations: [
    ChildRegisterComponent,
    ChildRegisterFormComponent,
    ChildMedicalRecordFormComponent,
    RegisterChildProgressComponent,
    ChildProgressFormComponent,
    RegisterListComponent,
    MedicalRecordListComponent,
    ProgressListComponent,
    ChildsComponent,
    ShowRegisterFormComponent,
    ShowMedicalRecordFormComponent
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
    ChildMedicalRecordFormComponent,
    RegisterChildProgressComponent,
    ChildProgressFormComponent,
    RegisterListComponent,
    MedicalRecordListComponent,
    ProgressListComponent,
    ChildsComponent,
    ShowRegisterFormComponent,
    ShowMedicalRecordFormComponent
  ]
})
export class ChildModule { }
