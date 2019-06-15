import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logeo={
    nombre: null,
    contra: null
  }

  ngOnInit() {
  }

  submitLogin(){
    this.usuarioService.login(this.logeo).subscribe(response => {
      let token=response.token;
      if(token != null){
        localStorage.setItem('token', token);
        console.log(token);
      }else{
        alert("Usuario o Contraseña Invalidos\nPor Favor Intente De Nuevo");
        location.href="/";
      }
    })
  }
  
}
