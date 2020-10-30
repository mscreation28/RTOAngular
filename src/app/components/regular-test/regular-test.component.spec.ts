import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegularTestComponent } from './regular-test.component';

describe('RegularTestComponent', () => {
  let component: RegularTestComponent;
  let fixture: ComponentFixture<RegularTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularTestComponent ],
      imports: [HttpClientModule,
        RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ques=[];
    component.selectedOption=[];
  });

  // it('should have question list', () => {
    // expect(component).toBeTruthy();
    // expect(component.ques).toBeNull();
  // });
});
