import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ExpensesService } from '../../../shared/services/expenses.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expensesList: any[];
  total = 0;
  itemList: any[];
  resourcesList: any = [];
  valuesList: any = [];
  selectedResource: any = '';
  originalList: any;
  selectedValue: any = '';

  constructor(private expensesService: ExpensesService, private router: Router) { }

  ngOnInit() {
    this.expensesService.getExpenses().subscribe(item => {
      this.expensesList = item;
      this.originalList = item;
    });
    this.resourcesList = this.expensesService.getResource();
  }

  loadValues() {
    this.resourcesList.forEach((resource: any) => {
      if ((resource.type).toString() === (this.selectedResource).toString()) {
        this.valuesList = resource.values;
      }
    });
  }

  filter() {
    this.total = 0;
    this.expensesList = this.originalList;
    if (this.selectedValue !== '') {
      // tslint:disable-next-line:max-line-length
      this.expensesList = this.expensesList.filter(expense => (this.calculateYear(expense.date)).toString() === this.selectedResource);
      // tslint:disable-next-line:max-line-length
      this.expensesList = this.expensesList.filter(expense => this.asignateMonth(expense.date) === this.selectedValue);
      this.expensesList.forEach((expense: any) => {
        this.total = this.total + parseInt(expense.amount, 10);
      });
    }
    this.selectedResource = '';
    this.selectedValue = '';
  }

  calculateYear(date: string) {
    return new Date(date).getFullYear();
  }

  calculateMonth(date: string) {
    return (new Date(date).getMonth()) + 1;
  }

  asignateMonth(date: string) {
    let month: string;
    const monthNumber = this.calculateMonth(date);
    switch (monthNumber) {
      case 1:
        month = 'Enero';
        break;
      case 2:
        month = 'Febrero';
        break;
      case 3:
        month = 'Marzo';
        break;
      case 4:
        month = 'Abril';
        break;
      case 5:
        month = 'Mayo';
        break;
      case 6:
        month = 'Junio';
        break;
      case 7:
        month = 'Julio';
        break;
      case 8:
        month = 'Agosto';
        break;
      case 9:
        month = 'Septiembre';
        break;
      case 10:
        month = 'Octubre';
        break;
      case 11:
        month = 'Noviembre';
        break;
      case 12:
        month = 'Diciembre';
        break;
    }
    return month;
  }

  createExpense() {
    this.router.navigate(['finances/registerExpenses']);
  }
}
