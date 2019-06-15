import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';

//Componentes
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

//Servicios
import { UsuarioService } from './servicios/usuario.service';
import{ AdministrativoService } from './servicios/administrativo.service';
import { TaquillaService } from './servicios/taquilla.service';
import { InterceptorService } from './servicios/interceptor.service';
import { ActualizarPeliculaComponent } from './peliculas/actualizar-pelicula/actualizar-pelicula.component';
import { ActualizarUsuarioComponent } from './componentes/usuarios/actualizar-usuario/actualizar-usuario.component';
//Guards

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
    VerFuncionesComponent,
    ActualizarPeliculaComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
      
    },
    UsuarioService,
    AdministrativoService,
    TaquillaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
