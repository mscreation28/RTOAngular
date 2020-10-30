import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { QBookComponent } from './qbook.component';

describe('QBookComponent', () => {
  let component: QBookComponent;
  let fixture: ComponentFixture<QBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QBookComponent ],
      imports: [HttpClientModule,
        RouterTestingModule.withRoutes([]),
        NgxPaginationModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
