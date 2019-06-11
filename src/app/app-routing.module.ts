import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/usuarios/registro-usuario/registro-usuario.component';
import { RegistroPeliculaComponent } from './componentes/peliculas/registro-pelicula/registro-pelicula.component';
import { RegistroFuncionComponent } from './componentes/funciones/registro-funcion/registro-funcion.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro-usuario', component: RegistroUsuarioComponent},
  {path: 'peliculas/registrar-pelicula', component: RegistroPeliculaComponent},
  {path: 'usuarios/registrar-usuario', component: RegistroUsuarioComponent},
  {path: 'funciones/registrar-funcion', component: RegistroFuncionComponent},
  {path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
