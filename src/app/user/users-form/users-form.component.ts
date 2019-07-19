import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Model
import { UserModel } from '../../shared/models/user.model';

// Service
import { UserService } from '../../shared/services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  myForm: FormGroup;
  @Input() user: UserModel;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit: EventEmitter<any>;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.onSubmit = new EventEmitter <any>();
  }

  ngOnInit() {
    this.user = new UserModel();
  }

  save() {
    this.onSubmit.emit(this.user);
  }

}
