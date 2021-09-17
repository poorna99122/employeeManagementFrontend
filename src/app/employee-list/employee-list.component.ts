import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  // This property we can use in employee list html
  employees : Employee[];

  constructor() { }

  ngOnInit(): void {

    this.employees = [{
      "id" :1,
      "firstName" : "Ramesh",
      "lastName" : "suresh",
      "emailId" : "Ramesh@gmail",

    },{
      "id" :1,
      "firstName" : "poorna",
      "lastName" : "chandra",
      "emailId" : "poorna@gmail",
    }];

  }

}
