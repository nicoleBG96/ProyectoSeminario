import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';


const routes: Routes = [
  {path: 'registerDonation', component: RegisterDonationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
