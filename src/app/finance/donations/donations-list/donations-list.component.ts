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
  filtered: any = [];

  constructor(private donationService: DonationService, private route: Router, private exportService: ExportService) { }

  ngOnInit() {
  }

  calculateYear(date: string) {
    return new Date(date).getFullYear();
  }

  calculateMonth(date: string) {
    return (new Date(date).getMonth()) + 1;
  }

  createDonation() {
    this.route.navigate(['finances/registerDonation']);
  }

  filterByDate(date?) {
    this.filtered = [];
    this.total = 0;
    if (date) {
      const startDate = date[0];
      const endDate = date[1];
      this.donationsList.forEach((event: any) => {
        if (new Date(event.date).getTime() >= startDate.getTime() &&
          new Date(event.date).getTime() <= endDate.getTime())
          this.filtered.push(event);
        this.total = this.total + parseInt(event.amount, 10);
      });
      this.donationsList = this.filtered;
    } else {
      this.donationService.getDonations().subscribe(item => {
        this.donationsList = item;
        this.donationsList.forEach(element => {
          this.total = this.total + parseInt(element.amount, 10);
        });
      });
    }
    return this.donationsList;
  }

  export() {
    const donationsAux: any = [];
    let donationAux: any = {};
    let totalDonation: any = {};
    if(this.filtered !==[]) {
      this.donationsList.forEach(donation => {
        donationAux = this.changeHeaders(donation);
        donationsAux.push(donationAux);
      });
    } else {
      this.filtered.forEach(donation => {
        donationAux = this.changeHeaders(donation);
        donationsAux.push(donationAux);
      });
    }
    totalDonation.Total = this.total;
    donationsAux.push(totalDonation);
    setTimeout(() => {
      this.exportService.exportExcel(donationsAux, 'donaciones');
    }, 3000);
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
