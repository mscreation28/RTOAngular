import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularTestComponent } from './regular-test.component';

describe('RegularTestComponent', () => {
  let component: RegularTestComponent;
  let fixture: ComponentFixture<RegularTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
