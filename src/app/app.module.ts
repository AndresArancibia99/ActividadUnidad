import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Actividad1Component } from './actividad1/actividad1.component';
import { AzarComponent } from './azar/azar.component';
import { EnlacePropiedadesComponent } from './enlace-propiedades/enlace-propiedades.component';
import { UnoComponent } from './uno/uno.component';
import { ListarComponent } from './listar/listar.component';
import { RecibirComponent } from './recibir/recibir.component';

@NgModule({
  declarations: [
    AppComponent,
    Actividad1Component,
    AzarComponent,
    EnlacePropiedadesComponent,
    UnoComponent,
    ListarComponent,
    RecibirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  nombre = 'Pedro Soto';
}
