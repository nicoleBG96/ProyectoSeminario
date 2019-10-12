import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChildProgressModel } from '../../../shared/models/child-progress.model';

import { ChildProgressService } from '../../../shared/services/child-progress.service';

@Component({
  selector: 'app-show-progress-profile',
  templateUrl: './show-progress-profile.component.html',
  styleUrls: ['./show-progress-profile.component.css']
})
export class ShowProgressProfileComponent implements OnInit {

  constructor(private childProgressService: ChildProgressService, private route: ActivatedRoute) { }
  child = new ChildProgressModel();

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.view(paramMap.params.id);
    });
  }

  view(id: string) {
    this.childProgressService.getChildProgressbyId(id).then(child => this.child = child);
  }

}
