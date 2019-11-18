import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MensualityService } from '../../../shared/services/mensuality.service';

import { MensualityModel } from '../../../shared/models/mensuality.model';

@Component({
  selector: 'app-show-mensuality',
  templateUrl: './show-mensuality.component.html',
  styleUrls: ['./show-mensuality.component.css']
})
export class ShowMensualityComponent implements OnInit {
  mensuality = new MensualityModel();
  mensualityID: any;

  constructor(private mensualityService: MensualityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.view(paramMap.params.id);
    });
  }

  view(id: string) {
    this.mensualityID = id;
    this.mensualityService.getMensualitybyId(id).then(child => this.mensuality = child);
  }

  goToMensualities() {
    this.router.navigate(['finances/showMensualities']);
  }
}
