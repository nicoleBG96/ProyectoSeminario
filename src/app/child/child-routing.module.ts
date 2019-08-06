import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';
import { EditRegisterChildComponent } from './register/edit-register-child/edit-register-child.component';
import { RegisterChildMedicalRecordComponent } from './medicalRecord/register-child-medical-record/register-child-medical-record.component';


const routes: Routes = [
  {path: 'registerChild', component: ChildRegisterComponent},
  {path: 'editRegisterChild', component: EditRegisterChildComponent},
  {path: 'registerChildMedicalRecord', component: RegisterChildMedicalRecordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
