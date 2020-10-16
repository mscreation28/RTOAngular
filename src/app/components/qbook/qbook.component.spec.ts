import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QBookComponent } from './qbook.component';

describe('QBookComponent', () => {
  let component: QBookComponent;
  let fixture: ComponentFixture<QBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QBookComponent ]
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
