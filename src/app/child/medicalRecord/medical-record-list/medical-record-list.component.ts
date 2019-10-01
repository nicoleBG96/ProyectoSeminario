import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

@Component({
  selector: 'app-medical-record-list',
  templateUrl: './medical-record-list.component.html',
  styleUrls: ['./medical-record-list.component.css']
})
export class MedicalRecordListComponent implements OnInit {
  medicalRecordList: any[];

  constructor(private childMedicalRecordService: ChildMedicalRecordService) { }

  ngOnInit() {
    this.childMedicalRecordService.getChildMedicalRecord().subscribe (item => {
      this.medicalRecordList = item;
    });
  }

}
