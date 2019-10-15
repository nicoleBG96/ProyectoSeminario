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
    // tslint:disable-next-line:prefer-const
    let today = new Date();
    this.child.age = this.calculateAgeIntMonths(this.child.birthDate, today);
  }

  updateProgress(event: any) {
    this.childProgressService.updateChildProgress(event.key, event);
  }

  calculateAgeIntMonths(d1: Date, d2: Date) {
    let months = 0;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months;
  }
}
