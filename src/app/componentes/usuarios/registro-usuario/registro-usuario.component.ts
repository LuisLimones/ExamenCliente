import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  user: Usuario={
    id: null,
    nombre: null,
    contra: null,
    rol: null
  }

  submitAgregar(){
  this.usuarioService.postUsuario(this.user).subscribe(data =>{
    if(data!=null){
      location.href="/";
      alert("Usuario agregado");
    }
    else{
      alert("Usuario ya registrado o invalido");
      location.href="/";
    }
  });
}

}
