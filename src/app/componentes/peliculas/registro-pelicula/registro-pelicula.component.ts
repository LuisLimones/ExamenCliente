import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelos/pelicula';
import { AdministrativoService } from 'src/app/servicios/administrativo.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro-pelicula',
  templateUrl: './registro-pelicula.component.html',
  styleUrls: ['./registro-pelicula.component.css']
})
export class RegistroPeliculaComponent implements OnInit {

  constructor(private adminService: AdministrativoService) { }
  pelicula: Pelicula={
    id: null,
    titulo: null,
    clasificacion: null,
    genero: null,
    duracion: null,
    status: "Activo"
  }

  ngOnInit() {
  }

  submitPelicula(){
    this.adminService.postPelicula(this.pelicula).subscribe(data =>{
      if(data != null){
        alert("Pelicula Registrada");
        location.href="/peliculas";
      }else{
        alert("Ocurrio un error");
        location.href="/peliculas/registrar-pelicula";
      }
    });
  }
}
