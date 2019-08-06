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
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit: EventEmitter<any>;
  private receivedObject: any;

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private formBuilder: FormBuilder,
              private childRegisterService: ChildRegisterService) {
    this.onSubmit = new EventEmitter<any>();
    this.onEdit = new EventEmitter<any>();
  }

  ngOnInit() {
    if (!this.child) {
    this.child = new ChildMedicalRecordModel();
    /*this.receivedObject = this.childRegisterService.getCreatedObject();
    this.child.firstName = this.receivedObject.firstName;
    this.child.lastName = this.receivedObject.lastName;
    this.child.mothersLastName = this.receivedObject.lastName;
    this.child.sex = this.receivedObject.sex;
    this.child.address = this.receivedObject.street;*/
    this.isEdit = false;
    } else {
      this.isEdit = true;
    }
  }

  saveMedicalRecord() {
    this.onSubmit.emit(this.child);
  }

  editMedical() {
    this.onEdit.emit(this.child);
  }

  editMedicalRecord(child: ChildMedicalRecordModel) {
    if (this.isEdit) {
      this.receivedObject = this.childMedicalRecordService.setCreatedObject(child);
    }
  }
}
