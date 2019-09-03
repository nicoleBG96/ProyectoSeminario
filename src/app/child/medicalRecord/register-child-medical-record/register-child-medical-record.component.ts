import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

// Model
import { ChildMedicalRecordModel } from '../../../shared/models/child-medical-record.model';

@Component({
  selector: 'app-register-child-medical-record',
  templateUrl: './register-child-medical-record.component.html',
  styleUrls: ['./register-child-medical-record.component.css']
})
export class RegisterChildMedicalRecordComponent implements OnInit {

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private router: Router) { }

  ngOnInit() {
  }

  registerMedicalRecord(event: ChildMedicalRecordModel) {
    this.childMedicalRecordService.createChildMedicalRecord(event);
  }

}
