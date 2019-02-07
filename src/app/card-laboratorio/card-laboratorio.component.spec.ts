import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLaboratorioComponent } from './card-laboratorio.component';

describe('CardLaboratorioComponent', () => {
  let component: CardLaboratorioComponent;
  let fixture: ComponentFixture<CardLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
