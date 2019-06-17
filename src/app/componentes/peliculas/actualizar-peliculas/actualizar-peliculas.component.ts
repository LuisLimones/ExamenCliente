import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/modelos/pelicula';
import { AdministrativoService } from 'src/app/servicios/administrativo.service';

@Component({
  selector: 'app-actualizar-peliculas',
  templateUrl: './actualizar-peliculas.component.html',
  styleUrls: ['./actualizar-peliculas.component.css']
})
export class ActualizarPeliculasComponent implements OnInit {

  constructor(private adminService: AdministrativoService, private route: ActivatedRoute) { }
  pelicula: Pelicula;
  id: string;

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.adminService.getPelicula(this.id).subscribe(peli=>this.pelicula=peli);
    console.log(this.pelicula);
  }

  submitActualizar(){
    this.adminService.putPelicula(this.pelicula).subscribe();
    alert('Pelicula Actualizada');
    location.href="/peliculas";
  }

}
