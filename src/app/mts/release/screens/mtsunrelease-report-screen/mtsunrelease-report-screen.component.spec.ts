import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTSunReleaseReportScreenComponent } from './mtsunrelease-report-screen.component';

describe('MTSunReleaseReportScreenComponent', () => {
  let component: MTSunReleaseReportScreenComponent;
  let fixture: ComponentFixture<MTSunReleaseReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTSunReleaseReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTSunReleaseReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
