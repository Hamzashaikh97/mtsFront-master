import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellStatementReportScreenComponent } from './sell-statement-report-screen.component';

describe('SellStatementReportScreenComponent', () => {
  let component: SellStatementReportScreenComponent;
  let fixture: ComponentFixture<SellStatementReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellStatementReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellStatementReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
