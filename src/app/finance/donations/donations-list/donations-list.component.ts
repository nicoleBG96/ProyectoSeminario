import { Component, OnInit } from '@angular/core';

import { DonationService } from '../../../shared/services/donation.service';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.css']
})
export class DonationsListComponent implements OnInit {
  donationsList: any[];
  total = 0;

  constructor(private donationService: DonationService) { }

  ngOnInit() {
    this.donationService.getDonations().subscribe(item => {
      this.donationsList = item;
      this.donationsList.forEach((donation: any) => {
        this.total = this.total + parseInt(donation.amount, 10);
      });
    });
  }
}
