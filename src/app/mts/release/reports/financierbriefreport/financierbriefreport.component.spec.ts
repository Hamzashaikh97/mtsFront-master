import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierbriefreportComponent } from './financierbriefreport.component';

describe('FinancierbriefreportComponent', () => {
  let component: FinancierbriefreportComponent;
  let fixture: ComponentFixture<FinancierbriefreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancierbriefreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancierbriefreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
