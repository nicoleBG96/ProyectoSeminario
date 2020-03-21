import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MensualityService } from '../../../shared/services/mensuality.service';
import { ExportService } from '../../../shared/services/export.service';

import { MensualityModel } from '../../../shared/models/mensuality.model';

@Component({
  selector: 'app-mensuality-list',
  templateUrl: './mensuality-list.component.html',
  styleUrls: ['./mensuality-list.component.css']
})
export class MensualityListComponent implements OnInit {
  mensualitiesList: any[];
  total = 0;

  constructor(private mensualityService: MensualityService, private router: Router, private exportService: ExportService) { }

  ngOnInit() {
    this.mensualityService.getMensualities().subscribe(item => {
      this.mensualitiesList = item;
      this.mensualitiesList.forEach(mensuality => {
        this.total = this.total + parseInt(mensuality.amount, 10);
      });
    });
  }

  goToMensuality(mensuality: any) {
    this.router.navigate(['finances/showMensuality/' + mensuality.key]);
  }

  createMensuality() {
    this.router.navigate(['finances/registerMensuality']);
  }

  filterByDate(date?) {
    this.total = 0;
    if (date) {
      const startDate = date[0];
      const endDate = date[1];
      const filtered: any = [];
      this.mensualitiesList.forEach((event: any) => {
        if (new Date(event.date).getTime() >= startDate.getTime() &&
        new Date(event.date).getTime() <= endDate.getTime()) {
          filtered.push(event);
          this.total = this.total + parseInt(event.amount, 10);
        }
      });
      this.mensualitiesList = filtered;
    }
  }

  export() {
    const mensualitiesAux: any = [];
    let mensualityAux: any = {};
    let totalMensuality: any = {};
    this.mensualitiesList.forEach(mensuality => {
      mensualityAux = {};
      mensualityAux.Nombre = mensuality.firstName;
      mensualityAux.ApellidoPaterno = mensuality.lastName;
      mensualityAux.ApellidoMaterno = mensuality.mothersLastName;
      mensualityAux.Fecha = mensuality.date;
      mensualityAux.MesAPagar = mensuality.monthToPay;
      mensualityAux.Monto = mensuality.amount;
      mensualitiesAux.push(mensualityAux);
    });
    totalMensuality.Total = this.total;
    mensualitiesAux.push(totalMensuality);
    setTimeout(() => {
      this.exportService.exportExcel(mensualitiesAux, 'mensualidades');
    }, 2000);
  }
}
