import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTMlossreportComponent } from './mtmlossreport.component';

describe('MTMlossreportComponent', () => {
  let component: MTMlossreportComponent;
  let fixture: ComponentFixture<MTMlossreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTMlossreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTMlossreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
