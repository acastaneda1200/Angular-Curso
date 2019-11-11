import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoListaComponent } from './producto/producto-lista/producto-lista.component';
import { ProductoDetalleComponent } from './producto/producto-detalle/producto-detalle.component';
import { ProductoMantenerComponent } from './producto/producto-mantener/producto-mantener.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductoComponent,
    ProductoListaComponent,
    ProductoDetalleComponent,
    ProductoMantenerComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
