import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor( private router: Router) {
    this.onSubmit = new EventEmitter<any>();
    this.onEdit = new EventEmitter<any>();
  }

  ngOnInit() {
    if (!this.child) {
      this.child = new ChildMedicalRecordModel();
      this.isEdit = false;
    } else {
      this.isEdit = true;
    }
  }

  saveMedicalRecord() {
    this.onSubmit.emit(this.child);
  }

  editMedicalRecord(child: ChildMedicalRecordModel) {
    this.onEdit.emit(this.child);
  }

  goToProfiles() {
    this.router.navigate(['child/profiles']);
  }
}
