import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChildRegisterService } from '../../../shared/services/child-register.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {
  childList: any[];

  constructor(private childRegisterService: ChildRegisterService, private router: Router ) { }

  ngOnInit() {
    this.childRegisterService.getChild().subscribe (item => {
      this.childList = [];
      item.forEach (element => {
        this.childList.push (element);
      });
    });
  }

}
