import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFuncionesComponent } from './actualizar-funciones.component';

describe('ActualizarFuncionesComponent', () => {
  let component: ActualizarFuncionesComponent;
  let fixture: ComponentFixture<ActualizarFuncionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarFuncionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
