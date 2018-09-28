import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxXencLoadingComponent } from './ngx-xenc-loading.component';

describe('NgxXencLoadingComponent', () => {
  let component: NgxXencLoadingComponent;
  let fixture: ComponentFixture<NgxXencLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxXencLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxXencLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
