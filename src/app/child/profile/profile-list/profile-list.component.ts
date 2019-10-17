import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileService } from '../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profileList: any[];

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe( item => {
      this.profileList = item;
    });
  }

  registerProfile(childRegister: any) {
    this.router.navigate(['child/showRegisterProfile/' + childRegister.key]);
  }

  medicalRecordProfile(childMedicalRecord: any) {
    this.router.navigate(['child/showMedicalRecordProfile/' + childMedicalRecord.key]);
  }

  progressProfile(childProgress: any) {
    this.router.navigate(['child/showProgressProfile/' + childProgress.key]);
  }

  createChild() {
    this.router.navigate(['child/registerChild']);
  }
}
