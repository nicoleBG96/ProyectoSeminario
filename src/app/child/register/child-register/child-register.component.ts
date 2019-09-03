import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ChildRegisterService } from '../../../shared/services/child-register.service';

// Model
import { ChildRegisterModel } from '../../../shared/models/child-register.model';

@Component({
  selector: 'app-child-register',
  templateUrl: './child-register.component.html',
  styleUrls: ['./child-register.component.css']
})
export class ChildRegisterComponent implements OnInit {

  constructor(private childRegisterService: ChildRegisterService, private router: Router) { }

  ngOnInit() {
  }

  register(event: ChildRegisterModel) {
    this.childRegisterService.createChild (event);
    this.childRegisterService.setCreatedObject(event);
  }
}
