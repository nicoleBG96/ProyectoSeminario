import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ChildRegisterService } from '../../../shared/services/child-register.service';
import { ChildRegisterModel } from 'src/app/shared/models/child-register.model';

@Component({
  selector: 'app-edit-register-child',
  templateUrl: './edit-register-child.component.html',
  styleUrls: ['./edit-register-child.component.css']
})
export class EditRegisterChildComponent implements OnInit {
  child: any;
  id: any;

  constructor(private childRegisterService: ChildRegisterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.child = this.childRegisterService.getCreatedObject();
    this.route.paramMap.subscribe((paramMap: any) => {
      this.id = (paramMap.params.id);
    });
  }

  update(event: any) {
    this.childRegisterService.updateChild(this.id, event);
    this.router.navigate(['child/showRegister/' + this.id]);
  }



}
