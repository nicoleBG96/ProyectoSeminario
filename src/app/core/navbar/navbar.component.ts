import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profiles = false;
  home = false;
  report = false;
  user = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMensualities() {
    this.report = true;
    this.router.navigate(['finances/showMensualities']);
    setTimeout(() => {
      this.report = false;
    }, 300);
  }

  goToDonations() {
    this.report = true;
    this.router.navigate(['finances/showDonations']);
    setTimeout(() => {
      this.report = false;
    }, 300);
  }

  goToExpenses() {
    this.report = true;
    this.router.navigate(['finances/showExpenses']);
    setTimeout(() => {
      this.report = false;
    }, 300);
  }

  goToReport() {
    this.report = true;
    this.router.navigate(['finances/showMonthlyReport']);
    setTimeout(() => {
      this.report = false;
    }, 300);
  }

  goToProfiles() {
    this.profiles = true;
    this.router.navigate(['child/profiles']);
    setTimeout(() => {
      this.profiles = false;
    }, 300);
  }

  goToIncomes() {
    this.report = true;
    this.router.navigate(['finances/showIncomes']);
    setTimeout(() => {
      this.report = false;
    }, 300);
  }

  goToLogin() {
    this.router.navigate(['auth/login']);
  }

  goToUsers() {
    this.user = true;
    this.router.navigate(['users/userList']);
    setTimeout(() => {
      this.user = false;
    }, 300);
  }

  goHome () {
    this.home = true;
    this.router.navigate(['']);
    setTimeout(() => {
      this.home = false
    }, 300);
  }
}
