import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMateriasComponent } from './registrar-materias.component';

describe('RegistrarMateriasComponent', () => {
  let component: RegistrarMateriasComponent;
  let fixture: ComponentFixture<RegistrarMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
