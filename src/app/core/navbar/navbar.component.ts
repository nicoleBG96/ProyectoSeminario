import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMensualities() {
    this.router.navigate(['finances/showMensualities']);
  }

  goToDonations() {
    this.router.navigate(['finances/showDonations']);
  }

  goToExpenses() {
    this.router.navigate(['finances/showExpenses']);
  }

  goToReport() {
    this.router.navigate(['finances/showMonthlyReport']);
  }

  goToProfiles() {
    this.router.navigate(['child/profiles']);
  }

  goToIncomes() {
    this.router.navigate(['finances/showIncomes']);
  }

  goToLogin() {
    this.router.navigate(['auth/login']);
  }

  goToUsers() {
    this.router.navigate(['users/userList']);
  }
}
