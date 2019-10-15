import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';
import { ChildRegisterService } from '../../../shared/services/child-register.service';
import { ChildMedicalRecordModel } from 'src/app/shared/models/child-medical-record.model';

@Component({
  selector: 'app-edit-medical-record',
  templateUrl: './edit-medical-record.component.html',
  styleUrls: ['./edit-medical-record.component.css']
})
export class EditMedicalRecordComponent implements OnInit {
  child: any;
  receivedObject: any;

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private router: ActivatedRoute,
              private childRegisterService: ChildRegisterService) { }

  ngOnInit() {
    this.child = this.childMedicalRecordService.getCreatedObject();
    // tslint:disable-next-line:prefer-const
    let today = new Date();
    console.log(this.child);
    console.log(this.child.key);
    this.childRegisterService.getChildbyId(this.child.key).then(child =>  this.receivedObject = child);
    console.log(this.receivedObject);
    this.child.age = this.calculateAge(this.receivedObject.birthDate, today);
  }

  updateMedicalRecord(event: any) {
    this.childMedicalRecordService.updateChildMedicalRecord(event.key, event);
  }

  calculateAge(d1: Date, d2: Date) {
    // tslint:disable-next-line:prefer-const
    let age = d2.getFullYear() - d1.getFullYear();
    // tslint:disable-next-line:prefer-const
    let months = d2.getMonth() - d1.getMonth();
    if (months < 0 || (months === 0 && d2.getDate() < d1.getDate())) {
      age--;
    }
    return age;
  }
}
