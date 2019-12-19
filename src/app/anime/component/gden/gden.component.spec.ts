import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdenComponent } from './gden.component';

describe('GdenComponent', () => {
  let component: GdenComponent;
  let fixture: ComponentFixture<GdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
