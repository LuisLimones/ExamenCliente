import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroAsientoComponent } from './componentes/asientos/registro-asiento/registro-asiento.component';
import { RegistroUsuarioComponent } from './componentes/usuarios/registro-usuario/registro-usuario.component';
import { RegistroPeliculaComponent } from './componentes/peliculas/registro-pelicula/registro-pelicula.component';
import { RegistroFuncionComponent } from './componentes/funciones/registro-funcion/registro-funcion.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroAsientoComponent,
    RegistroUsuarioComponent,
    RegistroPeliculaComponent,
    RegistroFuncionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
