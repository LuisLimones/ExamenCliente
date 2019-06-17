import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPeliculasComponent } from './actualizar-peliculas.component';

describe('ActualizarPeliculasComponent', () => {
  let component: ActualizarPeliculasComponent;
  let fixture: ComponentFixture<ActualizarPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
