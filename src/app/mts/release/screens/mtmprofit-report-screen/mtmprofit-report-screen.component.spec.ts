import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTMprofitReportScreenComponent } from './mtmprofit-report-screen.component';

describe('MTMprofitReportScreenComponent', () => {
  let component: MTMprofitReportScreenComponent;
  let fixture: ComponentFixture<MTMprofitReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTMprofitReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTMprofitReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
