import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';

import { MonthlyReport } from '../models/monthly-report.model';

@Injectable({
  providedIn: 'root'
})
export class MonthlyReportService {
  financesMonthlyList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getFinancesReport() {
    return this.firebase.list('monthlyReport').snapshotChanges().pipe(
      map(action => action.map(data => {
        return {
          key: data.payload.key,
          ...data.payload.val()
        };
      })));
  }

  createFinancesReport(monthly: MonthlyReport) {
    this.firebase.list('monthlyReport').push(monthly);
  }

  chargeFinancesReports(financesList: AngularFireList<any>) {
    this.firebase.list('monthlyReport').push(financesList);
  }
}
