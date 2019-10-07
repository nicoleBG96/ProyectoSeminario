import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

// Service
import { ChildRegisterService } from '../../../shared/services/child-register.service';

// Models
import { ChildRegisterModel } from '../../../shared/models/child-register.model';

@Component({
  selector: 'app-child-register-form',
  templateUrl: './child-register-form.component.html',
  styleUrls: ['./child-register-form.component.css']
})
export class ChildRegisterFormComponent implements OnInit {
  myForm: FormGroup;
  isEdit: boolean;
  private receivedObject: any;
  @Input() child: ChildRegisterModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit: EventEmitter<any>;

  constructor(private childRegisterService: ChildRegisterService, private formBuilder: FormBuilder) {
    this.onSubmit = new EventEmitter<any>();
   }

  ngOnInit() {
    if (!this.child) {
      this.child = new ChildRegisterModel();
      this.isEdit = false;
    } else {
      this.isEdit = true;
    }
  }

  save() {
    this.onSubmit.emit(this.child);
  }
}
