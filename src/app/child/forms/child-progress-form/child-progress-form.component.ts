import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Model
import { ChildProgressModel } from '../../../shared/models/child-progress.model';

// Services
import { ChildProgressService } from '../../../shared/services/child-progress.service';

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

  constructor(private childProgressService: ChildProgressService, private formBuilder: FormBuilder) {
    this.onSubmit = new EventEmitter<any>();
   }

  ngOnInit() {
    this.child = new ChildProgressModel();
  }

  saveProgress() {
    this.onSubmit.emit(this.child);
  }

  calculateTotal(point1: string, point2: string, point3: string) {
    if (point1 == null || point2 == null || point3 == null) {
      return 0;
    } else {
      return (parseInt(point1, 10) + parseInt(point2, 10) + parseInt(point3, 10));
    }
  }

}
