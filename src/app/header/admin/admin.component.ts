import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definitions Interface
import { UserService } from 'src/app/Services/userservice.service';
import { UserComponent } from 'src/app/models/user/user.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent {

  userServiceImpl: UserService;

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  age: number = 0;
  designation: string = "";
  country: string = "";
  city: string = "";
  gender: string = "";
  stype: string = "";

  constructor(userservice: UserService) {
    this.userServiceImpl = userservice;
  }

  onClickSubmit() {
    this.userServiceImpl.createNewUser(
      this.firstname,
      this.lastname,
      this.email,
      this.age,
      this.designation,
      this.city,
      this.country,
      this.gender,
      this.stype)
    console.log(this.userServiceImpl.getAllUsers());
  }

}
