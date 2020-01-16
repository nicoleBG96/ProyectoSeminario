import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfileService } from '../../../shared/services/profile.service';
import { ProfileModel } from '../../../shared/models/profile.model';
import { MensualityService } from 'src/app/shared/services/mensuality.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  profile = new ProfileModel();
  childId: any;

  constructor(private profileService: ProfileService, private route: ActivatedRoute, private router: Router,
              private mensualityService: MensualityService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.view(paramMap.params.id);
    });
  }

  view(id: string) {
    this.childId = id;
    this.profileService.getProfilebyId(id).then(child => this.profile = child);
  }

  status(child: any, state: boolean) {
    child.isDisable = state;
    this.profileService.updateProfile(this.childId, child);
  }

  getStatus(child: any) {
    if (child.isDisable) {
      return 'Inhabilitado';
    } else {
      return 'Habilitado';
    }
  }

  goToProfiles() {
    this.router.navigate(['child/profiles']);
  }

  goToRegister(child: any) {
    this.router.navigate(['child/showRegisterProfile/' + this.childId]);
  }

  goToMedicalRecord(child: any) {
    this.router.navigate(['child/showMedicalRecordProfile/' + this.childId]);
  }

  goToProgress(child: any) {
    this.router.navigate(['child/showProgressProfile/' + this.childId]);
  }

  goToMensualities(child: any) {
    child.isPayMensuality = true;
    this.profileService.updateProfile(this.childId, child);
    this.mensualityService.setMensuality(this.childId);
    this.router.navigate(['finances/registerMensuality']);
  }
}
