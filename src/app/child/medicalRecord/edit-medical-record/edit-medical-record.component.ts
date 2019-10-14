import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

@Component({
  selector: 'app-edit-medical-record',
  templateUrl: './edit-medical-record.component.html',
  styleUrls: ['./edit-medical-record.component.css']
})
export class EditMedicalRecordComponent implements OnInit {
  child: any;

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.child = this.childMedicalRecordService.getCreatedObject();
  }

  updateMedicalRecord(event: any) {
    this.childMedicalRecordService.updateChildMedicalRecord(event.key, event);
  }

}
