import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomTestComponent } from './custom-test.component';

describe('CustomTestComponent', () => {
  let component: CustomTestComponent;
  let fixture: ComponentFixture<CustomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTestComponent ],
      imports: [ HttpClientModule,RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
