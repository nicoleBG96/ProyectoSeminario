import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import { ExpensesModel } from '../models/expenses.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expensesList: AngularFireList<any>;
  resourcesList: any[];
  selectResource: any;
  months: any = [
    { id: 1, name: 'Enero' },
    { id: 2, name: 'Febrero' },
    { id: 3, name: 'Marzo' },
    { id: 4, name: 'Abril' },
    { id: 5, name: 'Mayo' },
    { id: 6, name: 'Junio' },
    { id: 7, name: 'Julio' },
    { id: 8, name: 'Agosto' },
    { id: 9, name: 'Septiembre' },
    { id: 10, name: 'Octubre' },
    { id: 11, name: 'Noviembre' },
    { id: 12, name: 'Diciembre'}
  ];


  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getExpenses() {
    return this.firebase.list('expenses').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createExpense(expenses: ExpensesModel) {
    this.firebase.list('expenses').push(expenses);
  }

  getResource() {
    let index = 1;
    this.resourcesList = [];
    for (let i = 2015; i <= 2090; i++) {
      this.resourcesList.push({
        id: index, type: i, values: this.months
      });
      index++;
    }
    return this.resourcesList;
  }
}
