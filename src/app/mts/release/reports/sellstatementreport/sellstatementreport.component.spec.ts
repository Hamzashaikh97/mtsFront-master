import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellstatementreportComponent } from './sellstatementreport.component';

describe('SellstatementreportComponent', () => {
  let component: SellstatementreportComponent;
  let fixture: ComponentFixture<SellstatementreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellstatementreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellstatementreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
