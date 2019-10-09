import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Service
import { ChildRegisterService } from '../../../shared/services/child-register.service';

// Model
import { ChildRegisterModel } from '../../../shared/models/child-register.model';

@Component({
  selector: 'app-show-register-form',
  templateUrl: './show-register-form.component.html',
  styleUrls: ['./show-register-form.component.css']
})
export class ShowRegisterFormComponent implements OnInit {
  child = new ChildRegisterModel();

  constructor(private childRegisterService: ChildRegisterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.view(paramMap.params.id);
    });
  }

  view(id: string) {
    this.childRegisterService.getChildbyId('LqggUsEp5u3uvv293-H').then(child =>  console.log(child));
  }

}
