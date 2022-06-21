import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  // PROPIEDADES
  totalNaves: number = 0;
  totalNavesCargadas: number = 0;
  urlAnterior: string = '';
  urlSiguiente: string = '';

  // CONSTRUCTOR
  constructor(private datosSrv: DatosService) { }

  // METODOS
  ngOnInit(): void {
    // Suscribirse a la lista de naves 
    this.datosSrv.getListaNaves$().subscribe(naves => {
      this.urlAnterior = naves.previous;
      this.urlSiguiente = naves.next;
      this.totalNaves = naves.count;
      this.totalNavesCargadas = this.datosSrv.arrayNaves.length;
    })
  }

  getMasNaves() {
    this.datosSrv.getListaNaves(this.urlSiguiente);
  }

}
