import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MensualityService } from '../../../shared/services/mensuality.service';
import { ProfileService } from '../../../shared/services/profile.service';

import { MensualityModel } from '../../../shared/models/mensuality.model';

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
    this.profileService.getProfilebyId(childKey).then((profile: any) => {
     this.mensuality = profile;
     this.mensuality.childKey = childKey;
    });
  }

  saveMensuality() {
    this.onSubmit.emit(this.mensuality);
  }

}
