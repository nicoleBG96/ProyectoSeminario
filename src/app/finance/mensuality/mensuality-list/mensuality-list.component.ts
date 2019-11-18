import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MensualityService } from '../../../shared/services/mensuality.service';

@Component({
  selector: 'app-mensuality-list',
  templateUrl: './mensuality-list.component.html',
  styleUrls: ['./mensuality-list.component.css']
})
export class MensualityListComponent implements OnInit {
  mensualitiesList: any[];
  itemList: any[];
  total = 0;

  constructor(private mensualityService: MensualityService, private router: Router) { }

  ngOnInit() {
    this.mensualityService.getMensualities().subscribe(item => {
      this.mensualitiesList = item;
      this.mensualitiesList.forEach((mensuality: any) => {
        this.total = this.total + parseInt(mensuality.amount, 10);
      });
    });
  }

  goToMensuality(mensuality: any) {
    this.router.navigate(['finances/showMensuality/' + mensuality.key]);
  }
}
