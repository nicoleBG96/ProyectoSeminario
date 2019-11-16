import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterDonationComponent } from './donations/register-donation/register-donation.component';
import { RegisterMensualityComponent } from './mensuality/register-mensuality/register-mensuality.component';
import { RegisterExpensesComponent } from './expenses/register-expenses/register-expenses.component';
import { DonationsListComponent } from './donations/donations-list/donations-list.component';
import { MensualityListComponent } from './mensuality/mensuality-list/mensuality-list.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';


const routes: Routes = [
  {path: 'registerDonation', component: RegisterDonationComponent},
  {path: 'registerMensuality', component: RegisterMensualityComponent},
  {path: 'registerExpenses', component: RegisterExpensesComponent},
  {path: 'showDonations', component: DonationsListComponent},
  {path: 'showMensualities', component: MensualityListComponent},
  {path: 'showExpenses', component: ExpensesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
