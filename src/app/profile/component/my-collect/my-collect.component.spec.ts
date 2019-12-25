import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollectComponent } from './my-collect.component';

describe('MyCollectComponent', () => {
  let component: MyCollectComponent;
  let fixture: ComponentFixture<MyCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
