import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from 'src/app/modelos/pelicula';
import { Sala } from 'src/app/modelos/sala';
import { Funcion } from 'src/app/modelos/funcion';
import { Horario } from 'src/app/modelos/horario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrativoService {

  constructor(private http: HttpClient) { }
  url: string="http://localhost:3333/administrativo";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  //Peliculas
  getPeliculas(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.url+'/peliculas/todas');
  }
  
  getPelicula(id:string): Observable<Pelicula>{
    return this.http.get<Pelicula>(this.url+'/peliculas/'+id);
  }

  postPelicula(pelicula: Pelicula): Observable<Pelicula>{
    return this.http.post<Pelicula>(this.url+'/peliculas/nueva', pelicula, this.httpOptions);
  }

  putPelicula(pelicula: Pelicula): Observable<Pelicula>{
    console.log('llega put pelicula servicio');
    return this.http.put<Pelicula>(this.url+'/peliculas/actualizar/'+pelicula.id, pelicula, this.httpOptions);
  }
  //Salas
  getSalas(): Observable<Sala[]>{
    return this.http.get<Sala[]>(this.url+'/salas');
  }
  //Funciones
  postFunciones(data :any): Observable<any>{
    return this.http.post<any>(this.url+'/funciones/nueva', data, this.httpOptions);
  }
  getFunciones(): Observable<Funcion[]>{
    return this.http.get<Funcion[]>(this.url+'/funciones/todas');
  }
  
  //Horarios
  getHorarios(): Observable<Horario[]>{
    return this.http.get<Horario[]>(this.url+'/horarios/todos');
  }
}
