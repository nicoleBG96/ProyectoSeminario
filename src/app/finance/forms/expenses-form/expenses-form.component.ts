import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ExpensesModel } from '../../../shared/models/expenses.model';

import { ExpensesService } from '../../../shared/services/expenses.service';

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css']
})
export class ExpensesFormComponent implements OnInit {
  myForm: FormGroup;

  @Input() expenses: ExpensesModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit: EventEmitter<any>;

  constructor(private expensesService: ExpensesService, private formBuilder: FormBuilder) { 
    this.onSubmit = new EventEmitter<any>();
  }

  ngOnInit() {
    this.expenses = new ExpensesModel();
  }

  saveExpenses() {
    this.onSubmit.emit(this.expenses);
  }
}
