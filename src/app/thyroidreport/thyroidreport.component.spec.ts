import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThyroidreportComponent } from './thyroidreport.component';

describe('ThyroidreportComponent', () => {
  let component: ThyroidreportComponent;
  let fixture: ComponentFixture<ThyroidreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThyroidreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThyroidreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
