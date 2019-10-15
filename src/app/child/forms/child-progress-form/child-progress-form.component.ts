import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Model
import { ChildProgressModel } from '../../../shared/models/child-progress.model';

// Services
import { ChildProgressService } from '../../../shared/services/child-progress.service';
import { ChildRegisterService } from '../../../shared/services/child-register.service';

@Component({
  selector: 'app-child-progress-form',
  templateUrl: './child-progress-form.component.html',
  styleUrls: ['./child-progress-form.component.css']
})
export class ChildProgressFormComponent implements OnInit {
  myForm: FormGroup;
  isEdit: boolean;
  @Input() child: ChildProgressModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit: EventEmitter<any>;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit: EventEmitter<any>;
  private receivedObject: any;

  constructor(private childProgressService: ChildProgressService, private formBuilder: FormBuilder,
              private childRegisterService: ChildRegisterService) {
    this.onSubmit = new EventEmitter<any>();
    this.onEdit = new EventEmitter<any>();
   }

  ngOnInit() {
    if (!this.child) {
      this.child = new ChildProgressModel();
      this.isEdit = false;
    } else {
      this.isEdit = true;
    }
  }

  saveProgress() {
    this.onSubmit.emit(this.child);
  }

  editProgress(child: ChildProgressModel) {
    this.onEdit.emit(this.child);
  }

  editProgressChild(child: ChildProgressModel) {
    if (this.isEdit) {
      this.receivedObject = this.childProgressService.setCreatedObject(child);
    }
  }

  calculateTotal(point1: string, point2: string, point3: string) {
    if (point1 == null || point2 == null || point3 == null) {
      return 0;
    } else {
      return (parseInt(point1, 10) + parseInt(point2, 10) + parseInt(point3, 10));
    }
  }
}
