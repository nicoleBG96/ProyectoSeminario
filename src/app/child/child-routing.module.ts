import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';
import { RegisterChildMedicalRecordComponent } from './medicalRecord/register-child-medical-record/register-child-medical-record.component';
import { EditChildMedicalRecordComponent } from './medicalRecord/edit-child-medical-record/edit-child-medical-record.component';
import { RegisterChildProgressComponent } from './progress/register-child-progress/register-child-progress.component';


const routes: Routes = [
  {path: 'registerChild', component: ChildRegisterComponent},
  {path: 'registerMedicalRecord', component: RegisterChildMedicalRecordComponent},
  {path: 'editMedicalRecord', component: EditChildMedicalRecordComponent},
  {path: 'registerProgress', component: RegisterChildProgressComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
