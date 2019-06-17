import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router:Router){}
  canActivate(): boolean{
    console.log("llega canactive")
    let rol;
    this.usuarioService.getRol().subscribe(data =>rol=data);
    if(rol.rol=="Admin"){
      return true;
    }
    else{
      alert("Acceso De Administrador Necesario");
      this.router.navigate(['/login']);
    }
  }
}
