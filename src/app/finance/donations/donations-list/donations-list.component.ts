import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DonationService } from '../../../shared/services/donation.service';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.css']
})
export class DonationsListComponent implements OnInit {
  donationsList: any[];
  total = 0;
  itemList: any[];
  resourcesList: any = [];
  valuesList: any = [];
  selectedResource: any = '';
  originalList: any;
  selectedValue: any = '';

  constructor(private donationService: DonationService, private route: Router) { }

  ngOnInit() {
    this.donationService.getDonations().subscribe(item => {
      this.donationsList = item;
      this.originalList = item;
    });
    this.resourcesList = this.donationService.getResource();
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
    this.donationsList = this.originalList;
    if (this.selectedValue !== '') {
      // tslint:disable-next-line:max-line-length
      this.donationsList = this.donationsList.filter(donation => (this.calculateYear(donation.date)).toString() === this.selectedResource);
      // tslint:disable-next-line:max-line-length
      this.donationsList = this.donationsList.filter(donation => this.asignateMonth(donation.date) === this.selectedValue);
      this.donationsList.forEach((donation: any) => {
        this.total = this.total + parseInt(donation.amount, 10);
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

  createDonation() {
    this.route.navigate(['finances/registerDonation']);
  }

}
