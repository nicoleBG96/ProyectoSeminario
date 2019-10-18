import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ChildMedicalRecordService } from '../../../shared/services/child-medical-record.service';

@Component({
  selector: 'app-edit-medical-record',
  templateUrl: './edit-medical-record.component.html',
  styleUrls: ['./edit-medical-record.component.css']
})
export class EditMedicalRecordComponent implements OnInit {
  child: any;
  id: any;

  constructor(private childMedicalRecordService: ChildMedicalRecordService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.child = this.childMedicalRecordService.getCreatedObject();
    this.child.age = this.calculateAge();
    this.child.date = new Date();
    this.route.paramMap.subscribe((paramMap: any) => {
      this.id = (paramMap.params.id);
    });
  }

  updateMedicalRecord(event: any) {
    this.childMedicalRecordService.updateChildMedicalRecord(this.id, event);
    this.router.navigate(['child/showMedicalRecord/' + this.id]);
  }

  calculateAge() {
    const today = new Date();
    const childBirth = new Date(this.child.birthDate);
    let age = today.getFullYear() - childBirth.getFullYear();
    const months = today.getMonth() - childBirth.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < childBirth.getDate())) {
      age--;
    }
    return age;
  }
}
