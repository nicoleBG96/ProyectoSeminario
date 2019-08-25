import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FinanceRoutingModule } from './finance-routing.module';

import { MaterialModule } from '../material-module/material-module.module';

import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';
import { DonationFormComponent } from './forms/donation-form/donation-form.component';


@NgModule({
  declarations: [
    RegisterDonationComponent,
    DonationFormComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    RegisterDonationComponent,
    DonationFormComponent
  ]
})
export class FinanceModule { }
