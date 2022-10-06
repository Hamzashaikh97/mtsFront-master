import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationmarginfinancierreportComponent } from './concentrationmarginfinancierreport.component';

describe('ConcentrationmarginfinancierreportComponent', () => {
  let component: ConcentrationmarginfinancierreportComponent;
  let fixture: ComponentFixture<ConcentrationmarginfinancierreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationmarginfinancierreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationmarginfinancierreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
