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
  filterDate: any;

  constructor(private donationService: DonationService, private route: Router) { }

  ngOnInit() {
    this.donationService.getDonations().subscribe(item => {
      this.donationsList = item;
      this.donationsList.forEach(donation => {
        this.total = this.total + parseInt(donation.amount, 10);
      });
    });
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
}
