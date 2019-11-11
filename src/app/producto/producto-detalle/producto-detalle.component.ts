import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
@Input() productoDetalles: {nombre: string, descripcion: string}


  constructor() { }

  ngOnInit() {
  }

}
