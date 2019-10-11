import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

import { ChildMedicalRecordModel } from '../../../shared/models/child-medical-record.model';


@Component({
  selector: 'app-show-medical-record-form',
  templateUrl: './show-medical-record-form.component.html',
  styleUrls: ['./show-medical-record-form.component.css']
})
export class ShowMedicalRecordFormComponent implements OnInit {

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private route: ActivatedRoute) { }
  child = new ChildMedicalRecordModel();

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.view(paramMap.params.id);
    });
  }

  view(id: string) {
    this.childMedicalRecordService.getChildMedicalRecordbyId(id).then(child => this.child = child);
  }

}
