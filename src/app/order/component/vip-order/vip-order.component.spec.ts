import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipOrderComponent } from './vip-order.component';

describe('VipOrderComponent', () => {
  let component: VipOrderComponent;
  let fixture: ComponentFixture<VipOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
