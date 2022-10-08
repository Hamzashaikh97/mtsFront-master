import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceeBriefReportScreenComponent } from './financee-brief-report-screen.component';

describe('FinanceeBriefReportScreenComponent', () => {
  let component: FinanceeBriefReportScreenComponent;
  let fixture: ComponentFixture<FinanceeBriefReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceeBriefReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceeBriefReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
