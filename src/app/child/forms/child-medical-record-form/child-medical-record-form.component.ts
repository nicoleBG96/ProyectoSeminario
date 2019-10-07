import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Service
import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';
import { ChildRegisterService } from '../../../shared/services/child-register.service';

// Model
import { ChildMedicalRecordModel } from '../../../shared/models/child-medical-record.model';

@Component({
  selector: 'app-child-medical-record-form',
  templateUrl: './child-medical-record-form.component.html',
  styleUrls: ['./child-medical-record-form.component.css']
})
export class ChildMedicalRecordFormComponent implements OnInit {
  myForm: FormGroup;
  isEdit: boolean;
  @Input() child: ChildMedicalRecordModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit: EventEmitter<any>;

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private formBuilder: FormBuilder,
              private childRegisterService: ChildRegisterService) {
    this.onSubmit = new EventEmitter<any>();
  }

  ngOnInit() {
    if (!this.child) {
    this.child = new ChildMedicalRecordModel();
    }
  }

  saveMedicalRecord() {
    this.onSubmit.emit(this.child);
  }
}
