import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfileService } from '../../../shared/services/profile.service';
import { ProfileModel } from '../../../shared/models/profile.model';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  profile = new ProfileModel();
  childId: any;

  constructor(private profileService: ProfileService, private route: ActivatedRoute, private router: Router) { }

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
}