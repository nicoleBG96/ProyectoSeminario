import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FinanceRoutingModule } from './finance-routing.module';

import { MaterialModule } from '../material-module/material-module.module';

import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';
import { DonationFormComponent } from './forms/donation-form/donation-form.component';
import { RegisterMensualityComponent } from './mensuality/register-mensuality/register-mensuality.component';
import { MensualityFormComponent } from './forms/mensuality-form/mensuality-form.component';
import { RegisterExpensesComponent } from './expenses/register-expenses/register-expenses.component';
import { ExpensesFormComponent } from './forms/expenses-form/expenses-form.component';


@NgModule({
  declarations: [
    RegisterDonationComponent,
    DonationFormComponent,
    RegisterMensualityComponent,
    MensualityFormComponent,
    RegisterExpensesComponent,
    ExpensesFormComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    RegisterDonationComponent,
    DonationFormComponent,
    RegisterMensualityComponent,
    MensualityFormComponent,
    RegisterExpensesComponent
  ]
})
export class FinanceModule { }
