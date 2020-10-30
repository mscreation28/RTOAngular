import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoadSignComponent } from './road-sign.component';

describe('RoadSignComponent', () => {
  let component: RoadSignComponent;
  let fixture: ComponentFixture<RoadSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadSignComponent ],
      imports: [ HttpClientModule,
        RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
