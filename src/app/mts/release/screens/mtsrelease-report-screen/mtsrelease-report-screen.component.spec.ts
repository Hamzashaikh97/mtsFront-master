import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTSReleaseReportScreenComponent } from './mtsrelease-report-screen.component';

describe('MTSReleaseReportScreenComponent', () => {
  let component: MTSReleaseReportScreenComponent;
  let fixture: ComponentFixture<MTSReleaseReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTSReleaseReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTSReleaseReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
