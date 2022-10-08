import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeReleaseRequestReportScreenComponent } from './pledge-release-request-report-screen.component';

describe('PledgeReleaseRequestReportScreenComponent', () => {
  let component: PledgeReleaseRequestReportScreenComponent;
  let fixture: ComponentFixture<PledgeReleaseRequestReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PledgeReleaseRequestReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeReleaseRequestReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
