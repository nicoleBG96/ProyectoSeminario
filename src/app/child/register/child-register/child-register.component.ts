import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ChildRegisterService } from '../../../shared/services/child-register.service';
import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

// Model
import { ChildRegisterModel } from '../../../shared/models/child-register.model';
import { ChildMedicalRecordModel } from '../../../shared/models/child-medical-record.model';

@Component({
  selector: 'app-child-register',
  templateUrl: './child-register.component.html',
  styleUrls: ['./child-register.component.css']
})
export class ChildRegisterComponent implements OnInit {

  constructor(private childRegisterService: ChildRegisterService, private router: Router,
              private childMedicalRecordService: ChildMedicalRecordService) { }

  ngOnInit() {
  }

  register(event: ChildRegisterModel) {
    this.childRegisterService.createChild (event);
    this.createMedicalRecord(event);
  }

  createMedicalRecord(event: any) {
    // tslint:disable-next-line:prefer-const
    let medicalRecord = new ChildMedicalRecordModel();
    medicalRecord.firstName = event.firstName;
    medicalRecord.lastName = event.lastName;
    medicalRecord.mothersLastName = event.mothersLastName;
    medicalRecord.sex = event.sex;
    medicalRecord.address = event.street;
    this.childMedicalRecordService.createChildMedicalRecord(event);
  }
}
