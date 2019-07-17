import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Routing
import { AuthentificationRoutingModule } from './authentification-routing.module';

// Components
import { LoginComponent } from './login/login.component';

// Service
import { AuthentificationService } from './shared/authentification.service';

import { MaterialModule } from '../material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [AuthentificationService]
})
export class AuthentificationModule { }
