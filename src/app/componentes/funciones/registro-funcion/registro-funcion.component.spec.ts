import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFuncionComponent } from './registro-funcion.component';

describe('RegistroFuncionComponent', () => {
  let component: RegistroFuncionComponent;
  let fixture: ComponentFixture<RegistroFuncionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFuncionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
