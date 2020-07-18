import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw15Component } from './hw15.component';

describe('Hw15Component', () => {
  let component: Hw15Component;
  let fixture: ComponentFixture<Hw15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
