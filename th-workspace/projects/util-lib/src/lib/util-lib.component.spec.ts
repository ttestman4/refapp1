import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilLibComponent } from './util-lib.component';

describe('UtilLibComponent', () => {
  let component: UtilLibComponent;
  let fixture: ComponentFixture<UtilLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
