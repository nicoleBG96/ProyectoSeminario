import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ChildRegisterService } from '../../../shared/services/child-register.service';
import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';
import { ChildProgressService } from '../../../shared/services/child-progress.service';

// Model
import { ChildRegisterModel } from '../../../shared/models/child-register.model';
import { ChildMedicalRecordModel } from '../../../shared/models/child-medical-record.model';
import { ChildProgressModel } from '../../../shared/models/child-progress.model';

@Component({
  selector: 'app-child-register',
  templateUrl: './child-register.component.html',
  styleUrls: ['./child-register.component.css']
})
export class ChildRegisterComponent implements OnInit {

  constructor(private childRegisterService: ChildRegisterService, private router: Router,
              private childMedicalRecordService: ChildMedicalRecordService, private childProgressService: ChildProgressService) { }

  ngOnInit() {
  }

  register(event: ChildRegisterModel) {
    // tslint:disable-next-line:prefer-const
    let latestKey = this.childRegisterService.createChild(event);
    this.createMedicalRecord(event, latestKey);
    this.createProgress(event, latestKey);
    this.childRegisterService.setCreatedObject(event);
  }

  createMedicalRecord(event: any, latestKey: any) {
    // tslint:disable-next-line:prefer-const
    let medicalRecord = new ChildMedicalRecordModel();
    medicalRecord.firstName = event.firstName;
    medicalRecord.lastName = event.lastName;
    medicalRecord.mothersLastName = event.mothersLastName;
    medicalRecord.sex = event.sex;
    medicalRecord.address = event.street;
    this.childMedicalRecordService.createChildMedicalRecord(event, latestKey);
  }

  createProgress(event: any, latestKey: any) {
    // tslint:disable-next-line:prefer-const
    let progress = new ChildProgressModel();
    progress.firstName = event.firstName;
    progress.lastName = event.lastName;
    progress.mothersLastName = event.lastName;
    progress.size = event.size;
    progress.weight = event.weight;
    progress.sex = event.sex;
    this.childProgressService.createChildProgress(event, latestKey);
  }
}
