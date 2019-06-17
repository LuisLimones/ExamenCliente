import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { Funcion } from 'src/app/modelos/funcion';
import { Horario } from 'src/app/modelos/horario';
import { AdministrativoService } from 'src/app/servicios/administrativo.service';

@Component({
  selector: 'app-ver-peliculas',
  templateUrl: './ver-peliculas.component.html',
  styleUrls: ['./ver-peliculas.component.css']
})
export class VerPeliculasComponent implements OnInit {

  constructor(private adminService: AdministrativoService) { }

  peliculas: Pelicula[];
  funciones: Funcion[];
  horarios: Horario[];

  ngOnInit() {
    this.getPeliculas();
    this.getHorarios();
    this.getFunciones();
  }

  getPeliculas(){
    this.adminService.getPeliculas().subscribe(data => this.peliculas=data);
  }

  getFunciones(){
    this.adminService.getFunciones().subscribe(data=>this.funciones=data);
  }

  getHorarios(){
    this.adminService.getHorarios().subscribe(data=>this.horarios=data);
  }

}
