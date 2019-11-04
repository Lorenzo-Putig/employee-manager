import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class CrudEmployeeService {

  updateEmployee(employee: Employee){
    const EmpId = employee.id.toString();
    localStorage.setItem(EmpId, JSON.stringify(employee));
    location.reload();
  }


  createEmployee(employee: FormGroup, key: string){
    localStorage.setItem(key,JSON.stringify(employee.value));
    location.reload();
  }

  readEmployees(employees: Employee[]){
    for (let i = 0; i < 100; i++) {
      const employee = JSON.parse(localStorage.getItem(i.toString())) as Employee;
      if(employee){
        employees.push(employee);
      }
    }
  }


  deleteEmployee(employee: Employee){
    const EmpId = employee.id.toString();
    localStorage.removeItem(EmpId);
    location.reload();
  }

  constructor() { }
}
