import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CrudEmployeeService } from '../crud-employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  onSelect(employee){
    this.selectedEmployee = employee;
  }

  employees: Employee[] = [];

  selectedEmployee: Employee;

  constructor(private crudEmployee: CrudEmployeeService) { }

  ngOnInit() {
    this.crudEmployee.readEmployees(this.employees);
  }

}
