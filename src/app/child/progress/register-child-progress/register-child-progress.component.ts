import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ChildProgressService } from '../../../shared/services/child-progress.service';

// Model
import { ChildProgressModel } from '../../../shared/models/child-progress.model';

@Component({
  selector: 'app-register-child-progress',
  templateUrl: './register-child-progress.component.html',
  styleUrls: ['./register-child-progress.component.css']
})
export class RegisterChildProgressComponent implements OnInit {

  constructor(private childProgressService: ChildProgressService, private router: Router) { }

  ngOnInit() {
  }

  registerProgress(event: ChildProgressModel) {
    this.childProgressService.createChildProgress(event);
    this.router.navigate(['child/registerProgress']);
  }
}
