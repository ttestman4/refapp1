import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfDetailsComponent } from './cf-details.component';

describe('CfDetailsComponent', () => {
  let component: CfDetailsComponent;
  let fixture: ComponentFixture<CfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
