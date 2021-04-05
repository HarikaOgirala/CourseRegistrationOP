import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursopIframeComponent } from './coursop-iframe.component';

describe('CoursopIframeComponent', () => {
  let component: CoursopIframeComponent;
  let fixture: ComponentFixture<CoursopIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursopIframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursopIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
