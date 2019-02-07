import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLaboratorio2Component } from './card-laboratorio2.component';

describe('CardLaboratorio2Component', () => {
  let component: CardLaboratorio2Component;
  let fixture: ComponentFixture<CardLaboratorio2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLaboratorio2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLaboratorio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
