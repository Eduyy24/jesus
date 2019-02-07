import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarDocenteComponent } from './registar-docente.component';

describe('RegistarDocenteComponent', () => {
  let component: RegistarDocenteComponent;
  let fixture: ComponentFixture<RegistarDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
