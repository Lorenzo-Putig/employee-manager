import { Component, OnInit } from '@angular/core';
import { CrudEmployeeService } from '../crud-employee.service'
import { Validators ,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-creator',
  templateUrl: './employee-creator.component.html',
  styleUrls: ['./employee-creator.component.css']
})
export class EmployeeCreatorComponent implements OnInit {

  employeeForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    wage: ['', Validators.required]
  });

  createEmployee(){
    this.crudEmployee.createEmployee(this.employeeForm, this.employeeForm.get('id').value);
  }

  constructor(private crudEmployee: CrudEmployeeService, private fb: FormBuilder ) { }

  ngOnInit() {
  }

}
