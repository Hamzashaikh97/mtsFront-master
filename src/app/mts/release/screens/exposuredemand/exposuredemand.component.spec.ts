import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposuredemandComponent } from './exposuredemand.component';

describe('ExposuredemandComponent', () => {
  let component: ExposuredemandComponent;
  let fixture: ComponentFixture<ExposuredemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExposuredemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposuredemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
