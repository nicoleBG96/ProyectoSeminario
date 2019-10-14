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
  }

  updateProgress(event: any) {
    this.childProgressService.updateChildProgress(event.key, event);
  }
}
