import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeReleaseScreenComponent } from './deposite-release-screen.component';

describe('DepositeReleaseScreenComponent', () => {
  let component: DepositeReleaseScreenComponent;
  let fixture: ComponentFixture<DepositeReleaseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositeReleaseScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeReleaseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
