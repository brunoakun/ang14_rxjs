import { DatosService } from './datos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaNavesComponent } from './lista-naves/lista-naves.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaNavesComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule      
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
