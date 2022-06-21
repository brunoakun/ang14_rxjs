
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  arrayNaves: any[] = [];

  constructor(private datosSrv: DatosService) { }

  ngOnInit(): void {

    // Suscribirse a la lista de naves, cada vez que haya un cambio, se actualizará la lista
    this.datosSrv.getListaNaves$().subscribe(naves => {
      this.arrayNaves = naves.results;
    })

    // Llamada al servicio
    this.datosSrv.getListaNaves();
  }

}
