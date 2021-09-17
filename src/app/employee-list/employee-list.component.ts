import { EmployeeService } from './../employee.service';
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

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {

   this.getEmployees();

  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data;
    })
  }

}
