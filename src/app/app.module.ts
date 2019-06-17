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
import { ActualizarPeliculasComponent } from './componentes/peliculas/actualizar-peliculas/actualizar-peliculas.component';
import { ActualizarFuncionesComponent } from './componentes/funciones/actualizar-funciones/actualizar-funciones.component';


//Servicios
import { UsuarioService } from './servicios/usuario.service';
import{ AdministrativoService } from './servicios/administrativo.service';
import { TaquillaService } from './servicios/taquilla.service';
import { InterceptorService } from './servicios/interceptor.service';
//Guards
import { AuthGuard } from './guards/auth.guard';
import { RolGuard } from './guards/rol.guard';

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
    ActualizarPeliculasComponent,
    ActualizarFuncionesComponent
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
    TaquillaService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
