import { Component, OnInit } from '@angular/core';

import { MensualityService } from '../../../shared/services/mensuality.service';

@Component({
  selector: 'app-mensuality-list',
  templateUrl: './mensuality-list.component.html',
  styleUrls: ['./mensuality-list.component.css']
})
export class MensualityListComponent implements OnInit {
  mensualitiesList: any[];
  total = 0;

  constructor(private mensualityService: MensualityService) { }

  ngOnInit() {
    this.mensualityService.getMensualities().subscribe(item => {
      this.mensualitiesList = item;
      this.mensualitiesList.forEach((donation: any) => {
        this.total = this.total + donation.amount;
      });
    });
  }

}
