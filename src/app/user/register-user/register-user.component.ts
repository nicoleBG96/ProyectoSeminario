import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Model
import { UserModel } from '../../shared/models/user.model';

// Services
import { UserService } from '../../shared/services/user.service';
import { AuthentificationService } from '../../authentification/authentification.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private authService: AuthentificationService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(user: UserModel) {
    this.userService.createUser(user);
    this.authService.register(user);
    this.router.navigate(['auth/login']);
  }

}
