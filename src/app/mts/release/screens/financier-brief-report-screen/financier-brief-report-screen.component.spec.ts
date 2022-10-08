import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierBriefReportScreenComponent } from './financier-brief-report-screen.component';

describe('FinancierBriefReportScreenComponent', () => {
  let component: FinancierBriefReportScreenComponent;
  let fixture: ComponentFixture<FinancierBriefReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierBriefReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancierBriefReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
