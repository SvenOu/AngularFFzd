import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfAdultComponent } from './ff-adult.component';

describe('FfAdultComponent', () => {
  let component: FfAdultComponent;
  let fixture: ComponentFixture<FfAdultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfAdultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
