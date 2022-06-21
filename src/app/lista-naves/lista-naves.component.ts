import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-naves',
  templateUrl: './lista-naves.component.html',
  styleUrls: ['./lista-naves.component.css']
})
export class ListaNavesComponent implements OnInit { 
  // PROPIEDADES

  // CONSTRUCTOR
  constructor(public datosSrv: DatosService) { }

  // METODOS
  ngOnInit(): void {
    // iniciar array de naves
    this.datosSrv.getListaNaves();

    // Suscribirse a la lista de naves, cada vez que haya un cambio, se añadirá al array arrayNaves de datosSrv
    this.datosSrv.getListaNaves$().subscribe(naves => {
      this.datosSrv.arrayNaves.push(...naves.results);
    })
  }

}
