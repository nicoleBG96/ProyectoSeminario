import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Service
import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

@Component({
  selector: 'app-edit-child-medical-record',
  templateUrl: './edit-child-medical-record.component.html',
  styleUrls: ['./edit-child-medical-record.component.css']
})
export class EditChildMedicalRecordComponent implements OnInit {
  child: any;

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.child = this.childMedicalRecordService.getCreatedObject();
  }

  updateMedicalRecord(event: any) {
    this.childMedicalRecordService.updateChildMedicalRecord(event.key, event);
  }
}
