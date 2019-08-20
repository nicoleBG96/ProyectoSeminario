import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FinanceRoutingModule } from './finance-routing.module';

// Components
import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';

@NgModule({
  declarations: [
    RegisterDonationComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule
  ],
  exports: [
    RegisterDonationComponent
  ]
})
export class FinanceModule { }
