import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { CrudEmployeeService } from '../crud-employee.service';
import { CaretakerService } from '../caretaker.service';
import { saveState } from '../wage-decorator';

@Component({
  selector: 'app-employee-editor',
  templateUrl: './employee-editor.component.html',
  styleUrls: ['./employee-editor.component.css']
})
export class EmployeeEditorComponent implements OnInit {

  updateEmployee() {
    this.crudEmployee.updateEmployee(this.employee);
  }

  deleteEmployee() {
    this.crudEmployee.deleteEmployee(this.employee);
  }

  @saveState()
  faltGrowth() {
    this.employee.wage += 50;
  }

  @saveState()
  doubleGrowth() {
    this.employee.wage *= 2;
  }

  @saveState()
  expGrowth() {
    this.employee.wage *= this.employee.wage;
  }


  back() {
    this.employee.wage = this.careTk.back();
  }

  redo() {
    this.employee.wage = this.careTk.redo();
  }
  
  @Input() employee: Employee;

  constructor(private crudEmployee: CrudEmployeeService, public careTk: CaretakerService) { }

  ngOnInit() {
  }

}
