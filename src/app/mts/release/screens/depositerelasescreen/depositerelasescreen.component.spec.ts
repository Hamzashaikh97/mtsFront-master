import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositerelasescreenComponent } from './depositerelasescreen.component';

describe('DepositerelasescreenComponent', () => {
  let component: DepositerelasescreenComponent;
  let fixture: ComponentFixture<DepositerelasescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositerelasescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositerelasescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
