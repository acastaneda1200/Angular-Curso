import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
productoPrueba = [{nombre: 'PRUEBA NOMBRE', descripcion: 'PRUEBA DESCRIPCION'},
                  {nombre: 'PRUEBA NOMBRE2', descripcion: 'PRUEBA DESCRIPCION2'}];

  constructor() { }

  ngOnInit() {
  }

}
