import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

// Routing
import { AuthentificationRoutingModule } from './authentification-routing.module';

// Components
import { LoginComponent } from './login/login.component';

// Service
import { AuthentificationService } from './shared/services/authentification.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    SharedModule
  ],
  providers: [AuthentificationService]
})
export class AuthentificationModule { }
