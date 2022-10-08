import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReleaseRequestReportScreenComponent } from './cash-release-request-report-screen.component';

describe('CashReleaseRequestReportScreenComponent', () => {
  let component: CashReleaseRequestReportScreenComponent;
  let fixture: ComponentFixture<CashReleaseRequestReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashReleaseRequestReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashReleaseRequestReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
