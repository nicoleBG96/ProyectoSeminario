import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DonationService } from '../../../shared/services/donation.service';

import { DonationsModel } from '../../../shared/models/donations.model';

@Component({
  selector: 'app-register-donation',
  templateUrl: './register-donation.component.html',
  styleUrls: ['./register-donation.component.css']
})
export class RegisterDonationComponent implements OnInit {

  constructor(private donationService: DonationService, private router: Router) { }

  ngOnInit() {
  }

  registerDonation(event: DonationsModel) {
    this.donationService.createDonation(event);
  }

}
