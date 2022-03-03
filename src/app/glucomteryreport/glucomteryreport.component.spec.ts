import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucomteryreportComponent } from './glucomteryreport.component';

describe('GlucomteryreportComponent', () => {
  let component: GlucomteryreportComponent;
  let fixture: ComponentFixture<GlucomteryreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucomteryreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucomteryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
