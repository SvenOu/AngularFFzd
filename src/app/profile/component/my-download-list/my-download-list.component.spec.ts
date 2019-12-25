import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDownloadListComponent } from './my-download-list.component';

describe('MyDownloadListComponent', () => {
  let component: MyDownloadListComponent;
  let fixture: ComponentFixture<MyDownloadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDownloadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDownloadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
