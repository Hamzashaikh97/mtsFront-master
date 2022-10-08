import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashallocationbalanceRequestReportScreenComponent } from './cashallocationbalance-request-report-screen.component';

describe('CashallocationbalanceRequestReportScreenComponent', () => {
  let component: CashallocationbalanceRequestReportScreenComponent;
  let fixture: ComponentFixture<CashallocationbalanceRequestReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashallocationbalanceRequestReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashallocationbalanceRequestReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
