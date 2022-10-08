import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossReportScreenComponent } from './profit-loss-report-screen.component';

describe('ProfitLossReportScreenComponent', () => {
  let component: ProfitLossReportScreenComponent;
  let fixture: ComponentFixture<ProfitLossReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitLossReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitLossReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
