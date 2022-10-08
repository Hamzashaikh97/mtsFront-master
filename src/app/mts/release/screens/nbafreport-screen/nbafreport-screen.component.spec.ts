import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAFReportScreenComponent } from './nbafreport-screen.component';

describe('NBAFReportScreenComponent', () => {
  let component: NBAFReportScreenComponent;
  let fixture: ComponentFixture<NBAFReportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NBAFReportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NBAFReportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
