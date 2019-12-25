import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomerServiceComponent } from './my-customer-service.component';

describe('MyCustomerServiceComponent', () => {
  let component: MyCustomerServiceComponent;
  let fixture: ComponentFixture<MyCustomerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
