import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataserviceService } from './dataservice.service';

describe('DataserviceService', () => {
  let service: DataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule ]
    }).compileComponents();
    service = TestBed.inject(DataserviceService);
  });   
});
