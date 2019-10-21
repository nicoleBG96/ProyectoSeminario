import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  childId: any;
  constructor(private childRegisterService: ChildRegisterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.view(paramMap.params.id);
    });
  }

  view(id: string) {
    this.childId = id;
    this.childRegisterService.getChildbyId(id).then(child => this.child = child);
  }

  goToProfiles() {
    this.router.navigate(['child/showProfile/' + this.childId]);
  }

  editRegister(child: any) {
    this.childRegisterService.setCreatedObject(child);
    this.router.navigate(['child/editRegisterChild/' + this.childId]);
  }

}
