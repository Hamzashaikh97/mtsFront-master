import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UinNetDemandReportScreenComponent } from './uin-net-demand-report-screen.component';

describe('UinNetDemandReportScreenComponent', () => {
  let component: UinNetDemandReportScreenComponent;
  let fixture: ComponentFixture<UinNetDemandReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UinNetDemandReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UinNetDemandReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
