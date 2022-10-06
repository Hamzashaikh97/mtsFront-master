import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgebyUINreportComponent } from './pledgeby-uinreport.component';

describe('PledgebyUINreportComponent', () => {
  let component: PledgebyUINreportComponent;
  let fixture: ComponentFixture<PledgebyUINreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PledgebyUINreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgebyUINreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
