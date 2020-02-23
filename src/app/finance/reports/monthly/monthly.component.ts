import { Component, OnInit } from '@angular/core';

import { MonthlyReportService } from '../../../shared/services/monthly-report.service';
import { MensualityService } from '../../../shared/services/mensuality.service';
import { ExpensesService } from '../../../shared/services/expenses.service';
import { DonationService } from '../../../shared/services/donation.service';

import { MonthlyReport } from '../../../shared/models/monthly-report.model';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {
  auxList: any = [];

  constructor(private mensualityService: MensualityService) { }

  ngOnInit() {
    this.register();
  }

  register() {
    console.log( this.mensualityService.getMensualities());
  }

}
