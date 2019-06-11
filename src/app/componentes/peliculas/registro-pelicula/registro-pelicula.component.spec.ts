import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPeliculaComponent } from './registro-pelicula.component';

describe('RegistroPeliculaComponent', () => {
  let component: RegistroPeliculaComponent;
  let fixture: ComponentFixture<RegistroPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
