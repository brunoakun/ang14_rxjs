# Ang14Rxjs

En algunos casos queremos que una función se ejecuta cuando ha finalizado otra, pues necesitaremos los datos de la primera función para pasarlos a la segunda.

En JS se utilizan los callBacks, pero en Angular se utilizan las Subscripciones

Para obtener datos de una API, importar HttpClientModule en app.module.ts
´´´
 import { HttpClientModule } from '@angular/common/http';
 ...
imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule
],
...
```

##1.- Crear el servicio Datos.service.ts
-este servicio hace llamada http a la API
-Este srevicio tiene métodos Observables a los que se subscriben los componentes que necesiten

-app.module.ts, añadir el servicio
´´´
providers: [DatosService],
´´´

##2.- Subscripción a los datos desde componenetes:
p.Ej en el navbar, para tener el total de naves
```
ngOnInit(): void {
    // Suscribirse a la lista de naves 
    this.datosSrv.getListaNaves$().subscribe(naves => {
      this.contadorNaves = naves.count;
    })
  }
```