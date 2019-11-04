import { TestBed } from '@angular/core/testing';

import { CrudEmployeeService } from './crud-employee.service';

describe('CrudEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudEmployeeService = TestBed.get(CrudEmployeeService);
    expect(service).toBeTruthy();
  });
});
