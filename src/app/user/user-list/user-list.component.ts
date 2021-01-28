import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersList: any [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe(item => {
      this.usersList = item;
    })
  }

  changePosition(event: any) {
    if(event.isDisable == false)
      return 'Deshabilitado';
    else
      return 'Habilitado';
  }

  goToDetail(event: any) {
    this.router.navigate(['users/user/'+ event.key]);
  }

  deleteUser(event: any){
    this.userService.deleteUserById(event.key);
  }

}
