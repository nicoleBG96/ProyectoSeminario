import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Service
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private authService: AuthentificationService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  gmailLogin() {
    this.authService.loginWithGoogle().then((res) => {
      window.location.replace('/home');
    });
  }

  login(value) {
    this.authService.loginWhitEmail(value).then((res) => {
      window.location.replace('/home');
    });
  }

  newUser() {
    window.location.replace('/');
  }
}
