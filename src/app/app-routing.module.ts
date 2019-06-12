import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

import { VerUsuariosComponent } from './componentes/usuarios/ver-usuarios/ver-usuarios.component';
import { RegistroUsuarioComponent } from './componentes/usuarios/registro-usuario/registro-usuario.component';

import { VerPeliculasComponent } from './componentes/peliculas/ver-peliculas/ver-peliculas.component';
import { RegistroPeliculaComponent } from './componentes/peliculas/registro-pelicula/registro-pelicula.component';

import { VerFuncionesComponent } from './componentes/funciones/ver-funciones/ver-funciones.component';
import { RegistroFuncionComponent } from './componentes/funciones/registro-funcion/registro-funcion.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'peliculas', component: VerPeliculasComponent},
  {path: 'peliculas/registrar-pelicula', component: RegistroPeliculaComponent},
  
  {path: 'usuarios', component: VerUsuariosComponent},
  {path: 'usuarios/registro-usuario', component: RegistroUsuarioComponent},
  
  {path: 'funciones', component: VerFuncionesComponent},
  {path: 'funciones/registrar-funcion', component: RegistroFuncionComponent},
  {path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
