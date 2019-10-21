import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ChildProgressService } from '../../../shared/services/child-progress.service';

@Component({
  selector: 'app-edit-progress',
  templateUrl: './edit-progress.component.html',
  styleUrls: ['./edit-progress.component.css']
})
export class EditProgressComponent implements OnInit {
  child: any;
  id: any;

  constructor(private childProgressService: ChildProgressService, private router: Router, private route: ActivatedRoute,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.child = this.childProgressService.getCreatedObject();
    this.child.age = this.calculateAgeIntMonths();
    this.child.date = new Date();
    this.route.paramMap.subscribe((paramMap: any) => {
      this.id = (paramMap.params.id);
    });
  }

  updateProgress(event: any) {
    if (this.validate(event)) {
      this.childProgressService.updateChildProgress(this.id, event);
      this.router.navigate(['child/showProgressProfile/' + this.id]);
      this.toastrService.success('exito al editar', 'ÉXITO');
    } else {
      this.toastrService.error('error al editar', 'ERROR');
    }

  }

  calculateAgeIntMonths() {
    const today = new Date();
    const childBirth = new Date(this.child.birthDate);
    let months = (today.getFullYear() - childBirth.getFullYear()) * 12;
    months -= childBirth.getMonth() + 1;
    months += today.getMonth();
    return months;
  }

  validate(event: any) {
    let correct = false;
    if (event.firstName !== '' && event.lastName !== '' && event.mothersLastName !== '' && event.date !== null &&
        event.birthDate !== null && event.sex !== '' && event.size !== '' && event.weight !== '' && event.numberOrder !== '' &&
        event.folio !== '' && event.age !== null && event.pointA1 !== null && event.pointB1 !== null && event.pointC1 !== null &&
        event.pointD1 !== null) {
      correct = true;
    } else {
      correct = false;
    }
    return correct;
  }
}
