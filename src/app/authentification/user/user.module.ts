import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Routing
import { UserRoutingModule } from './user-routing.module';

// Service
import { AuthentificationService } from '../shared/services/authentification.service';

// Components
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersFormComponent } from './users-form/users-form.component';

@NgModule({
  declarations: [RegisterUserComponent, EditUserComponent, UsersFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [RegisterUserComponent, EditUserComponent, UsersFormComponent,],
  providers: [AuthentificationService]
})
export class UserModule { }
