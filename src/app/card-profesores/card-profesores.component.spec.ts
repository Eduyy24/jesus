import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfesoresComponent } from './card-profesores.component';

describe('CardProfesoresComponent', () => {
  let component: CardProfesoresComponent;
  let fixture: ComponentFixture<CardProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
