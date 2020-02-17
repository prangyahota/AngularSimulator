import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  
  constructor() {
    
   }
   tableData = [{
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin1",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin1",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin1",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  },
  {
    "UserID": "1",
    "UserName": "Siemens1",
    "Role": "Admin",
    "Approved": true
  }
];


  ngOnInit() {
    // for (let i = 0; i < 10; i++) {
    //   this.tableData[i].UserID =i.toString();
    //   this.tableData[i].UserName ="Siemens";
    //   this.tableData[i].Role = "Admin";
    //   this.tableData[i].Approved = true;
    // }
  }  
}