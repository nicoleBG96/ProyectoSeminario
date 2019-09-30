import { Component, OnInit } from '@angular/core';

import { ExpensesService } from '../../../shared/services/expenses.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expensesList: any[];
  total = 0;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.expensesService.getExpenses().subscribe(item => {
      this.expensesList = item;
      this.expensesList.forEach((expense: any) => {
        this.total = this.total + parseInt(expense.amount, 10);
      });
    });
  }

}
