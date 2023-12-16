import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definitions Interface
import { UserService } from 'src/app/Services/userservice.service';
import { UserComponent } from 'src/app/models/user/user.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {

  constructor(private userservice: UserService) {
    userservice.getAllUsers().map(user => this.rowData.push(user));
  }

  rowData: UserComponent[] = [

  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "firstname" },
    { field: "lastname" },
    { field: "email" },
    { field: "age" },
    { field: "designation" },
    { field: "country" },
    { field: "city" },
    { field: "gender" },
    { field: "stype" }
  ];

  refreshData() {
    console.log("Refreshing Data");
    this.userservice.getAllUsers().map(user => this.rowData.push(user));
    console.log(this.userservice.getAllUsers());
  }
}
