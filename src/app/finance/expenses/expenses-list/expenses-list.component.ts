import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ExpensesService } from '../../../shared/services/expenses.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expensesList: any[];
  total = 0;

  constructor(private expensesService: ExpensesService, private router: Router, private exportService: ExportService) { }

  ngOnInit() {
    this.expensesService.getExpenses().subscribe(item => {
      this.expensesList = item;
      this.expensesList.forEach(expense => {
        this.total = this.total + parseInt(expense.amount, 10);
      });
    });
  }

  calculateYear(date: string) {
    return new Date(date).getFullYear();
  }

  calculateMonth(date: string) {
    return (new Date(date).getMonth()) + 1;
  }

  filterByDate(date?) {
    this.total = 0;
    if (date) {
      const startDate = date[0];
      const endDate = date[1];
      const filtered: any = [];
      this.expensesList.forEach((event: any) => {
        if (new Date(event.date).getTime() >= startDate.getTime() &&
          new Date(event.date).getTime() <= endDate.getTime()) {
          filtered.push(event);
          this.total = this.total + parseInt(event.amount, 10);
        }
      });
      this.expensesList = filtered;
    }
  }

  createExpense() {
    this.router.navigate(['finances/registerExpenses']);
  }

  export() {
    const expensesAux: any = [];
    let expenseAux: any = {};
    let totalExpense: any = {};
    this.expensesList.forEach(expense => {
      expenseAux = {};
      expenseAux.Fecha = expense.date;
      expenseAux.Mes = expense.month;
      expenseAux.Descripcion = expense.description;
      expenseAux.Monto = expense.amount;
      expensesAux.push(expenseAux);
    })
    totalExpense.Total = this.total;
    expensesAux.push(totalExpense)
    setTimeout(() => {
      this.exportService.exportExcel(expensesAux, 'egresos');
    }, 2000);
  }
}
