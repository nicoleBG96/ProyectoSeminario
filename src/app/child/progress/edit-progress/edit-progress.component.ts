import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChildProgressService } from '../../../shared/services/child-progress.service';

@Component({
  selector: 'app-edit-progress',
  templateUrl: './edit-progress.component.html',
  styleUrls: ['./edit-progress.component.css']
})
export class EditProgressComponent implements OnInit {
  child: any;

  constructor(private childProgressService: ChildProgressService, private router: Router) { }

  ngOnInit() {
    this.child = this.childProgressService.getCreatedObject();
    this.child.age = this.calculateAgeIntMonths();
    this.child.date = new Date();
  }

  updateProgress(event: any) {
    this.childProgressService.updateChildProgress(event.key, event);
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
