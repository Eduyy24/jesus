import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecLaboratirioComponent } from './selec-laboratirio.component';

describe('SelecLaboratirioComponent', () => {
  let component: SelecLaboratirioComponent;
  let fixture: ComponentFixture<SelecLaboratirioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecLaboratirioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecLaboratirioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
