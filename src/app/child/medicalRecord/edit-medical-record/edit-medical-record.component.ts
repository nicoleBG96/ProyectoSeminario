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

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private router: ActivatedRoute,
    private childRegisterService: ChildRegisterService) { }

  ngOnInit() {
    this.child = this.childMedicalRecordService.getCreatedObject();
    // tslint:disable-next-line:prefer-const
    this.child.age = this.calculateAge();
  }

  updateMedicalRecord(event: any) {
    this.childMedicalRecordService.updateChildMedicalRecord(event.key, event);
  }

  calculateAge() {
    let today = new Date();
    let childBirth = new Date(this.child.birthDate);
    // tslint:disable-next-line:prefer-const
    let age = today.getFullYear() - childBirth.getFullYear();
    // tslint:disable-next-line:prefer-const
    let months = today.getMonth() - childBirth.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < childBirth.getDate()))
      age--;
    return age;
  }
}
