import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FinanceRoutingModule } from './finance-routing.module';

<<<<<<< HEAD
import { MaterialModule } from '../material-module/material-module.module';

import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';
import { DonationFormComponent } from './forms/donation-form/donation-form.component';


@NgModule({
  declarations: [
    RegisterDonationComponent,
    DonationFormComponent
=======
// Components
import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';

@NgModule({
  declarations: [
    RegisterDonationComponent
>>>>>>> 657fe9005ba70f3ff2c9994519e831cc5f6043f6
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
<<<<<<< HEAD
    SharedModule,
    MaterialModule
  ],
  exports: [
    RegisterDonationComponent,
    DonationFormComponent
=======
    SharedModule
  ],
  exports: [
    RegisterDonationComponent
>>>>>>> 657fe9005ba70f3ff2c9994519e831cc5f6043f6
  ]
})
export class FinanceModule { }
