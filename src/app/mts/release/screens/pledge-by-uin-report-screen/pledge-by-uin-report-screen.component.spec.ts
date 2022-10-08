import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeByUinReportScreenComponent } from './pledge-by-uin-report-screen.component';

describe('PledgeByUinReportScreenComponent', () => {
  let component: PledgeByUinReportScreenComponent;
  let fixture: ComponentFixture<PledgeByUinReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PledgeByUinReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeByUinReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
