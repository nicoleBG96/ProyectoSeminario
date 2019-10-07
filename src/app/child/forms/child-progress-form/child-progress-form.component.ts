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
  @Input() child: ChildProgressModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit: EventEmitter<any>;
  private receivedObject: any;
  totalA = 0;
  totalB = 0;
  totalC = 0;
  totalD = 0;
  total = 0;

  constructor(private childProgressService: ChildProgressService, private formBuilder: FormBuilder,
              private childRegisterService: ChildRegisterService) {
    this.onSubmit = new EventEmitter<any>();
   }

  ngOnInit() {
    this.child = new ChildProgressModel();
    this.totalA += this.child.pointA1 + this.child.pointA2 + this.child.pointA3;
    this.totalB = this.child.pointB1 + this.child.pointB2 + this.child.pointB3;
    this.totalC = this.child.pointC1 + this.child.pointC2 + this.child.pointC3;
    this.totalD = this.child.pointD1 + this.child.pointD2 + this.child.pointD3;
    this.total = this.totalA + this.totalB + this.totalC + this.totalD;
  }

  saveProgress() {
    this.onSubmit.emit(this.child);
  }

}
