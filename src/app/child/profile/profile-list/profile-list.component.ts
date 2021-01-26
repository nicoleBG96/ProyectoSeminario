import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensualityService } from 'src/app/shared/services/mensuality.service';

import { ProfileService } from '../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profileList: any = [];
  searchQuery: any;
  filterDate: any;

  constructor(private profileService: ProfileService, private router: Router, private mensualityService: MensualityService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(item => {
      this.profileList = item;
      this.profileList.forEach((profile: any) => {
        profile.age = this.calculateAge(profile.birthDate);
      });
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

  goToProfile(childProfile: any) {
    this.router.navigate(['child/showProfile/' + childProfile.key]);
  }

  goToMensualities(child: any) {
    let childId = child.key;
    this.profileService.updateProfile(childId, child);
    this.mensualityService.setMensuality(childId);
    this.router.navigate(['finances/showMensuality']);
  }

  getStatus(child: any) {
    if (child.isDisable) {
      return 'Inhabilitado';
    } else {
      return 'Habilitado';
    }
  }

  calculateAge(date: Date) {
    const today = new Date();
    const childBirth = new Date(date);
    let age = today.getFullYear() - childBirth.getFullYear();
    const months = today.getMonth() - childBirth.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < childBirth.getDate())) {
      age--;
    }
    return age;
  }

  filterByDate(date?) {
    if (date) {
      const startDate = date[0];
      const endDate = date[1];
      const filtered: any = [];
      this.profileList.forEach((event: any) => {
        if (new Date(event.admissionDate).getTime() >= startDate.getTime() &&
          new Date(event.admissionDate).getTime() <= endDate.getTime()) {
          filtered.push(event);
        }
      });
      this.profileList = filtered;
    }
  }
}

