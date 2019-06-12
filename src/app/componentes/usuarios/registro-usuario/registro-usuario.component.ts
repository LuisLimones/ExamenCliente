import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: string;
  contra: string;

  usuario_registrado = Usuario;

  constructor() { }

  ngOnInit() {
  }

}
