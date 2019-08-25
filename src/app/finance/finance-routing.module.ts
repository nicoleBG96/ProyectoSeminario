import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';
import { RegisterMensualityComponent } from './mensuality/register-mensuality/register-mensuality.component';


const routes: Routes = [
  {path: 'registerDonation', component: RegisterDonationComponent},
  {path: 'registerMensuality', component: RegisterMensualityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
