import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTMlossReportScreenComponent } from './mtmloss-report-screen.component';

describe('MTMlossReportScreenComponent', () => {
  let component: MTMlossReportScreenComponent;
  let fixture: ComponentFixture<MTMlossReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTMlossReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTMlossReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
