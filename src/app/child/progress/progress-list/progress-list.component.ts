import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChildProgressService } from '../../../shared/services/child-progress.service';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.css']
})
export class ProgressListComponent implements OnInit {
  progressList: any[];

  constructor(private childProgressService: ChildProgressService, private router: Router) { }

  ngOnInit() {
    this.childProgressService.getChildProgress().subscribe (item => {
      this.progressList = item;
      });
  }

}
