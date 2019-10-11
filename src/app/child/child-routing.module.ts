import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ChildRegisterComponent } from './register/child-register/child-register.component';
import { RegisterChildMedicalRecordComponent } from './medicalRecord/register-child-medical-record/register-child-medical-record.component';
import { RegisterChildProgressComponent } from './progress/register-child-progress/register-child-progress.component';
import { RegisterListComponent } from './register/register-list/register-list.component';
import { MedicalRecordListComponent } from './medicalRecord/medical-record-list/medical-record-list.component';
import { ProgressListComponent } from './progress/progress-list/progress-list.component';
import { ChildsComponent } from './interfaces/childs/childs.component';
import { ShowRegisterFormComponent } from './register/show-register-form/show-register-form.component';
import { ShowMedicalRecordFormComponent } from './medicalRecord/show-medical-record-form/show-medical-record-form.component';


const routes: Routes = [
  {path: 'registerChild', component: ChildRegisterComponent},
  {path: 'registerMedicalRecord', component: RegisterChildMedicalRecordComponent},
  {path: 'registerProgress', component: RegisterChildProgressComponent},
  {path: 'showRegisterChild', component: RegisterListComponent},
  {path: 'showMedicalRecord', component: MedicalRecordListComponent},
  {path: 'showProgress', component: ProgressListComponent},
  {path: 'childs', component: ChildsComponent},
  {path: 'showRegister', component: RegisterListComponent},
  {path: 'showRegisterProfile/:id', component: ShowRegisterFormComponent},
  {path: 'showMedicalRecordProfile/:id', component: ShowMedicalRecordFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
