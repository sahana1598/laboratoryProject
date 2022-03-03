import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaematologyreportComponent } from './haematologyreport.component';

describe('HaematologyreportComponent', () => {
  let component: HaematologyreportComponent;
  let fixture: ComponentFixture<HaematologyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaematologyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaematologyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
