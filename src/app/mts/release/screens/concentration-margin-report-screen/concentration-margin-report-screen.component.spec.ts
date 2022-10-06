import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationMarginReportScreenComponent } from './concentration-margin-report-screen.component';

describe('ConcentrationMarginReportScreenComponent', () => {
  let component: ConcentrationMarginReportScreenComponent;
  let fixture: ComponentFixture<ConcentrationMarginReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationMarginReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationMarginReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
