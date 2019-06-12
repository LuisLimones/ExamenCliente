import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { makeBindingParser, mergeNsAndName } from '@angular/compiler';
import { Observable,Operator } from 'rxjs';
import { Usuario } from 'src/app/modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url_registro: string = 'http://127.0.0.1:3333/registrar-usuario';
  url_get: string = 'http://127.0.0.1:3333/usuarios';
  
  constructor(private request: HttpClient) {}

  obtenerUsuarios(): Observable<any>{
    return this.request.get<Usuario[]>(this.url_get);
  }

  registrarUsuario(usuario: Usuario){
    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.request.post(this.url_registro,json,{headers:headers});
 }
}
