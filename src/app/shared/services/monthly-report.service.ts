import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import { Observable, of } from 'rxjs';

import { MonthlyReport } from '../models/monthly-report.model';

@Injectable({
  providedIn: 'root'
})
export class MonthlyReportService {
  financesMonthlyList: any = [];

  constructor(private firebase: AngularFireDatabase) { }

  getMonthly() {
    return this.financesMonthlyList;
  }

  createFinancesReport(monthly: any) {
    this.financesMonthlyList.push(monthly)
  }
}
