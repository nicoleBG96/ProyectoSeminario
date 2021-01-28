import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DonationService } from '../../../shared/services/donation.service';
import { ExportService } from '../../../shared/services/export.service';
import { element } from 'protractor';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.css']
})
export class DonationsListComponent implements OnInit {
  donationsList: any[];
  total = 0;
  loading = false;

  constructor(private donationService: DonationService, private route: Router, private exportService: ExportService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false; 
      this.donationService.getDonations().subscribe(item => {
        this.donationsList = item;
        this.donationsList.forEach(donation => {
          this.total = this.total + parseInt(donation.amount, 10);
        });
      });      
    }, 500);
  }

  createDonation() {
    this.route.navigate(['finances/registerDonation']);
  }

  filterByDate(date?) {
    this.total = 0;
    if (date) {
      const startDate = date[0];
      const endDate = date[1];
      const filtered: any = [];
      this.donationsList.forEach((event: any) => {
        if (new Date(event.date).getTime() >= startDate.getTime() &&
          new Date(event.date).getTime() <= endDate.getTime()) {
          filtered.push(event);
          this.total = this.total + parseInt(event.amount, 10);
        }
      });
      this.donationsList = filtered;
    }
  }

  export() {
    const donationsAux: any = [];
    let donationAux: any = {};
    let totalDonation: any = {};
    this.donationsList.forEach(expense => {
      donationAux = {};
      donationAux.Fecha = expense.date;
      donationAux.Descripcion = expense.description;
      donationAux.Monto = expense.amount;
      donationsAux.push(donationAux);
    })
    totalDonation.Total = this.total;
    donationsAux.push(totalDonation)
    setTimeout(() => {
      this.exportService.exportExcel(donationsAux, 'donaciones');
    }, 2000);
  }

  changeHeaders(donation: any) {
    let donationAux: any = {};
    donationAux = {};
    donationAux.Fecha = donation.date;
    donationAux.Descripcion = donation.description;
    donationAux.Monto = donation.amount;
    return donationAux;
  }
}
