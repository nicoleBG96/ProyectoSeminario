import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpensesModel } from '../../../shared/models/expenses.model';

import { ExpensesService } from '../../../shared/services/expenses.service';

@Component({
  selector: 'app-register-expenses',
  templateUrl: './register-expenses.component.html',
  styleUrls: ['./register-expenses.component.css']
})
export class RegisterExpensesComponent implements OnInit {

  constructor(private expensesService: ExpensesService, private router: Router) { }

  ngOnInit() {
  }

  registerExpenses(event: ExpensesModel) {
    this.expensesService.createExpenses(event);
    this.router.navigate(['finances/registerExpenser']);
  }

}
