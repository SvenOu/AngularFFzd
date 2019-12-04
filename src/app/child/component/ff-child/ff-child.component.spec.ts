import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfChildComponent } from './ff-child.component';

describe('FfChildComponent', () => {
  let component: FfChildComponent;
  let fixture: ComponentFixture<FfChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
