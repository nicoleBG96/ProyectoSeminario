import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ChildProgressService } from '../../../shared/services/child-progress.service';

@Component({
  selector: 'app-edit-progress',
  templateUrl: './edit-progress.component.html',
  styleUrls: ['./edit-progress.component.css']
})
export class EditProgressComponent implements OnInit {
  child: any;
  id: any;

  constructor(private childProgressService: ChildProgressService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.child = this.childProgressService.getCreatedObject();
    this.child.age = this.calculateAgeIntMonths();
    this.child.date = new Date();
    this.route.paramMap.subscribe((paramMap: any) => {
      this.id = (paramMap.params.id);
    });
  }

  updateProgress(event: any) {
    this.childProgressService.updateChildProgress(this.id, event);
    this.router.navigate(['child/showProgressProfile/' + this.id]);
  }

  calculateAgeIntMonths() {
    const today = new Date();
    const childBirth = new Date(this.child.birthDate);
    let months = (today.getFullYear() - childBirth.getFullYear()) * 12;
    months -= childBirth.getMonth() + 1;
    months += today.getMonth();
    return months;
  }
}
