import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/modelos/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  url: string="http://localhost:3333/usuarios";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  //Agregar
  postUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url+'/agregarUsuario', usuario, this.httpOptions);
  }
  //Obtener
  
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+'/todos');
  }
  //Login
  login(data): Observable<any>{
    return this.http.post<any>(this.url+'/login', data, this.httpOptions);
  }
  //Logout
  logout(){
    localStorage.removeItem('token');
    location.assign('/');
  }
  //Verificacion login
  logeado(){
    return !!localStorage.getItem('token');
  }
  //Verificacion Rol
  getRol():Observable<any>{
    return this.http.get<any>(this.url+'/rol');
  }
}


