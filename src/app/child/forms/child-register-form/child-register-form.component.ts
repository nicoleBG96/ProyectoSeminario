import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

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
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit: EventEmitter<any>;
  file: File;

  constructor(private childRegisterService: ChildRegisterService, private formBuilder: FormBuilder, private router: Router) {
    this.onSubmit = new EventEmitter<any>();
    this.onEdit = new EventEmitter<any>();
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
    this.router.navigate(['child/profiles']);
  }

  edit(child: ChildRegisterModel) {
    this.onEdit.emit(this.child);
    this.router.navigate(['child/showRegister/' + this.childRegisterService.getCreatedObject().key]);
  }

  editChild(child: ChildRegisterModel) {
    if (this.isEdit) {
      this.receivedObject = this.childRegisterService.setCreatedObject(child);
    }
    this.router.navigate(['child/profiles']);
  }

  setImage(event) {
    this.childRegisterService.setCurrentImage(event.target.files[0]);
  }

  goToProfile() {
    this.router.navigate(['child/profiles']);
  }
}

