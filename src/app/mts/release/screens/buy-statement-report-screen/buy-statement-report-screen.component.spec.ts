import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyStatementReportScreenComponent } from './buy-statement-report-screen.component';

describe('BuyStatementReportScreenComponent', () => {
  let component: BuyStatementReportScreenComponent;
  let fixture: ComponentFixture<BuyStatementReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyStatementReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyStatementReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
