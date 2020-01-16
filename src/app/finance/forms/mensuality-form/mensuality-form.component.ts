import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MensualityService } from '../../../shared/services/mensuality.service';
import { ProfileService } from '../../../shared/services/profile.service';

import { MensualityModel } from '../../../shared/models/mensuality.model';
import { stringify } from 'querystring';
import { element } from 'protractor';

@Component({
  selector: 'app-mensuality-form',
  templateUrl: './mensuality-form.component.html',
  styleUrls: ['./mensuality-form.component.css']
})
export class MensualityFormComponent implements OnInit {
  myForm: FormGroup;

  @Input() mensuality: MensualityModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit: EventEmitter<any>;

  constructor(private mensualityService: MensualityService, private formBuilder: FormBuilder, private profileService: ProfileService) {
    this.onSubmit = new EventEmitter<any>();
   }

  ngOnInit() {
    this.mensuality = new MensualityModel();
    const childKey = this.mensualityService.getChildKey();
    let child: any;
    this.profileService.getProfilebyId(childKey).then((profile: any) => {
      child = profile;
      if (child.isPayMensuality) {
        this.mensuality = profile;
        this.mensuality.childKey = childKey;
      }
     });
    if (!child.isPayMensuality) {
     }
  }

  saveMensuality() {
    this.onSubmit.emit(this.mensuality);
  }

  getChild(ci: string) {
    let perfiles: any[];
    this.profileService.getProfile().subscribe(item => {
      perfiles = item;
      // tslint:disable-next-line:no-shadowed-variable
      perfiles.forEach(element => {
        if (element.numberOfIdentity === ci) {
          return element;
        } else {
          return 'ERROR';
        }
      });
    });
  }

  search() {
    // tslint:disable-next-line:no-unused-expression
    document.getElementById('demo').innerHTML;
  }
}
