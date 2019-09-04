import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },
  { path: 'users', loadChildren: './user/user.module#UserModule' },
  { path: 'finances', loadChildren: './finance/finance.module#FinanceModule'},
  {path: 'child', loadChildren: './child/child.module#ChildModule'},
  {path: 'menu', component: MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
