import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { ServiceProductos } from '../../services/service-productos';

import { InterfaceProducto } from '../../interfaces/interface-producto.interface';
@Component({
  selector: 'app-component-prouducto',
  imports: [],
  templateUrl: './component-prouducto.html',
  styleUrl: './component-prouducto.css',
})
export class ComponentProuducto {

  precioTotalProducto: number;
  cantidad:number;

constructor() {
  this.cantidad = 0;
  this.precioTotalProducto = 0;
}

  ServiceProductos = inject(ServiceProductos);

  @Input() producto!: InterfaceProducto;
  @Input() currency!: string;


cargarCantidad(event: any): void {
  this.cantidad = Number(event.target.value);
}

botonMas() {

  this.cantidad ++;

  console.log(this.cantidad);
  this.precioTotalProducto = this.cantidad * this.producto.price;
}

botonMenos() {

  if(this.cantidad > 0){

  this.cantidad --;
  console.log(this.cantidad);

  }


}

}
