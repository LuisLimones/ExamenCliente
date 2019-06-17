import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { Sala } from 'src/app/modelos/sala';
import { Funcion } from 'src/app/modelos/funcion';
import { Horario } from 'src/app/modelos/horario';
import { AdministrativoService } from 'src/app/servicios/administrativo.service';

@Component({
  selector: 'app-registro-funcion',
  templateUrl: './registro-funcion.component.html',
  styleUrls: ['./registro-funcion.component.css']
})
export class RegistroFuncionComponent implements OnInit {

  horario:string =null;
  horarios:string[]=[];
  peliculas: Pelicula[];
  salas: Sala[];
  funcion: Funcion={
    id: null,
    pelicula_id: null,
    sala_id: null
  }
  constructor(private adminService: AdministrativoService) { }

  ngOnInit() {
    this.getPeliculas();
    this.getSalas();
  }

  agregarHorario(){
    this.horarios.push(this.horario);
    console.log(this.horarios);
  }

  getPeliculas(){
    this.adminService.getPeliculas().subscribe(peliculas => this.peliculas=peliculas);
  }
  getSalas(){
    this.adminService.getSalas().subscribe(salas=>this.salas=salas);
  }
  
  registrarFuncion(){
    this.adminService.postFunciones({funcion: this.funcion, horarios: this.horarios}).subscribe();
  }

  pruebaValor(){}
  
}
