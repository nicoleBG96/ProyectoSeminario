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

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getMensuality() {
    return this.firebase.list('expenses').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createMensuality(expenses: ExpensesModel) {
    this.firebase.list('expemses').push(expenses);
  }
}
