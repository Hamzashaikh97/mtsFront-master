import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceebriefreportComponent } from './financeebriefreport.component';

describe('FinanceebriefreportComponent', () => {
  let component: FinanceebriefreportComponent;
  let fixture: ComponentFixture<FinanceebriefreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceebriefreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceebriefreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
