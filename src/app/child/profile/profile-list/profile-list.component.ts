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
  resourcesList: any = [];
  valuesList: any = [];
  selectedResource: any = '';
  originalList: any;
  selectedValue: any = '';
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(item => {
      this.profileList = item;
      this.originalList = item;
    });

    this.resourcesList = this.profileService.getResource();
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

  loadValues() {
    this.resourcesList.forEach((resource: any) => {
      if (resource.type === this.selectedResource) {
        this.valuesList = resource.values;
      }
    });
  }

  filter() {
    this.profileList = this.originalList;
    if (this.selectedResource === 'Sexo') {
      if (this.selectedValue !== '') {
        this.profileList = this.profileList.filter(profile => profile.sex === this.selectedValue);
      }
    }
    if (this.selectedResource === 'Edad') {
      if (this.selectedValue !== '') {
        this.profileList = this.profileList.filter(profile => this.calculateAge(profile.birthDate).toString() === this.selectedValue);
      }
    }
    if (this.selectedResource === 'Año de Admisión') {
      if (this.selectedValue !== '') {
        this.profileList = this.profileList.filter(profile => this.calculateYear(profile.admissionDate).toString() === this.selectedValue );
      }
    }
    if (this.selectedResource === 'Estado') {
      if (this.selectedValue !== '') {
        this.profileList = this.profileList.filter(profile => (profile.isDisable).toString() === this.selectedValue);
      }
    }
    this.selectedResource = '';
    this.selectedValue = '';
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

  calculateYear(date: string) {
    return new Date(date).getFullYear();
  }
}

