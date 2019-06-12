import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroAsientoComponent } from './componentes/asientos/registro-asiento/registro-asiento.component';
import { RegistroUsuarioComponent } from './componentes/usuarios/registro-usuario/registro-usuario.component';
import { RegistroPeliculaComponent } from './componentes/peliculas/registro-pelicula/registro-pelicula.component';
import { RegistroFuncionComponent } from './componentes/funciones/registro-funcion/registro-funcion.component';
import { AppRoutingModule } from './app-routing.module';
import { VerUsuariosComponent } from './componentes/usuarios/ver-usuarios/ver-usuarios.component';
import { VerPeliculasComponent } from './componentes/peliculas/ver-peliculas/ver-peliculas.component';
import { VerFuncionesComponent } from './componentes/funciones/ver-funciones/ver-funciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroAsientoComponent,
    RegistroUsuarioComponent,
    RegistroPeliculaComponent,
    RegistroFuncionComponent,
    VerUsuariosComponent,
    VerPeliculasComponent,
    VerFuncionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
