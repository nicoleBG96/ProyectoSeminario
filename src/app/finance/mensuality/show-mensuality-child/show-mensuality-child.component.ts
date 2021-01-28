import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExportService } from 'src/app/shared/services/export.service';

import { MensualityModel } from '../../../shared/models/mensuality.model';
import { MensualityService } from '../../../shared/services/mensuality.service';

@Component({
  selector: 'app-show-mensuality-child',
  templateUrl: './show-mensuality-child.component.html',
  styleUrls: ['./show-mensuality-child.component.css']
})
export class ShowMensualityChildComponent implements OnInit {

  mensuality = new MensualityModel();
  mensualitiesList: any[];
  childKey: any;
  total = 0;
  loading = false;

  constructor(private mensualityService: MensualityService, private router: Router, private exportService: ExportService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.mensuality = new MensualityModel();
      this.childKey = this.mensualityService.getChildKey();
      const filtered: any = [];
      this.mensualityService.getMensualities().subscribe(item => {
        this.mensualitiesList = item;
        this.mensualitiesList.forEach(mensuality => {
          if (mensuality.childKey == this.childKey) {
            filtered.push(mensuality);
            this.total = this.total + parseInt(mensuality.amount, 10);
          }
        });
        this.mensualitiesList = filtered;
      });
    }, 500);
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

  createMensuality() {
    this.mensualityService.setMensuality(this.childKey);
    this.router.navigate(['finances/registerMensuality']);
  }

  goToProfile() {
    this.router.navigate(['child/showProfile/' + this.childKey]);
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
}
