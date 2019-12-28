import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfDetailComponent } from './cf-detail.component';

describe('CfDetailComponent', () => {
  let component: CfDetailComponent;
  let fixture: ComponentFixture<CfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
