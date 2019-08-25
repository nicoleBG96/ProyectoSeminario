import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';


const routes: Routes = [
<<<<<<< HEAD
  {path: 'registerDonations', component: RegisterDonationComponent}
=======
  {path: 'registerDonation', component: RegisterDonationComponent}
>>>>>>> 657fe9005ba70f3ff2c9994519e831cc5f6043f6
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
