import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-ui',
  templateUrl: './employee-ui.component.html',
  styleUrls: ['./employee-ui.component.css']
})
export class EmployeeUiComponent implements OnInit {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
