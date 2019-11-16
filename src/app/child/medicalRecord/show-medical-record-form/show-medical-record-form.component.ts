import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

import { ChildMedicalRecordModel } from '../../../shared/models/child-medical-record.model';


@Component({
  selector: 'app-show-medical-record-form',
  templateUrl: './show-medical-record-form.component.html',
  styleUrls: ['./show-medical-record-form.component.css']
})
export class ShowMedicalRecordFormComponent implements OnInit {

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private route: ActivatedRoute, private router: Router) { }
  child = new ChildMedicalRecordModel();
  childId: any;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.view(paramMap.params.id);
    });
  }

  view(id: string) {
    this.childId = id;
    this.childMedicalRecordService.getChildMedicalRecordbyId(id).then(child => this.child = child);
  }

  editMedicalRecord(child: any) {
    this.childMedicalRecordService.setCreatedObject(child);
    this.router.navigate (['child/editMedicalRecord/' + this.childId]);
  }

  goToProfiles() {
    this.router.navigate(['child/showProfile/' + this.childId]);
  }
}
