import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MensualityModel } from '../../../shared/models/mensuality.model';

import { MensualityService } from '../../../shared/services/mensuality.service';

@Component({
  selector: 'app-register-mensuality',
  templateUrl: './register-mensuality.component.html',
  styleUrls: ['./register-mensuality.component.css']
})
export class RegisterMensualityComponent implements OnInit {

  constructor(private mensualityService: MensualityService, private router: Router) { }

  ngOnInit() {
  }

  registerMensuality(event: MensualityModel) {
    this.mensualityService.createMensuality(event);
    this.router.navigate(['finances/registerMensualities']);
  }
}
