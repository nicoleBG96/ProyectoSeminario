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
  private n1: any;
  private n2: any;
  private n3: any;
  private total: any;

  constructor(private childProgressService: ChildProgressService, private formBuilder: FormBuilder,
              private childRegisterService: ChildRegisterService) {
    this.onSubmit = new EventEmitter<any>();
   }

  ngOnInit() {
    this.child = new ChildProgressModel();
    /*this.receivedObject = this.childRegisterService.getCreatedObject();
    this.child.firstName = this.receivedObject.firstName;
    this.child.lastName = this.receivedObject.lastName;
    this.child.mothersLastName = this.receivedObject.lastName;
    this.child.size = this.receivedObject.size;
    this.child.weight = this.receivedObject.weight;
    this.child.sex = this.receivedObject.sex;*/
    this.n1 = 0;
    this.n2 = 0;
    this.n3 = 0;
  }

  saveProgress() {
    this.onSubmit.emit(this.child);
  }

  convert(num: string) {
    return parseInt(num, 10);
  }

  average(num1: string, num2: string, num3: string) {
    this.n1 = this.convert(num1);
    this.n2 = this.convert(num2);
    this.n3 = this.convert(num3);
    this.total = (this.n1 + this.n2 + this.n3) / 3;
    return this.total;
  }

}
