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
  resourcesList: any = [];
  valuesList: any = [];
  selectedResource: any = '';
  originalList: any;
  selectedValue: any = '';

  constructor(private mensualityService: MensualityService, private router: Router) { }

  ngOnInit() {
    this.mensualityService.getMensualities().subscribe(item => {
      this.mensualitiesList = item;
      this.originalList = item;
    });
    this.resourcesList = this.mensualityService.getResource();
  }

  goToMensuality(mensuality: any) {
    this.router.navigate(['finances/showMensuality/' + mensuality.key]);
  }

  loadValues() {
    this.resourcesList.forEach((resource: any) => {
      if ((resource.type).toString() === (this.selectedResource).toString()) {
        this.valuesList = resource.values;
      }
    });
  }

  filter() {
    this.mensualitiesList = this.originalList;
    if (this.selectedValue !== '') {
      // tslint:disable-next-line:max-line-length
      this.mensualitiesList = this.mensualitiesList.filter(mensuality => (this.calculateYear(mensuality.date)).toString() === this.selectedResource);
      // tslint:disable-next-line:max-line-length
      this.mensualitiesList = this.mensualitiesList.filter(mensuality => this.asignateMonth(mensuality.date) === this.selectedValue);
      this.mensualitiesList.forEach((mensuality: any) => {
        this.total = this.total + parseInt(mensuality.amount, 10);
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
}
