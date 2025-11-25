import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { ServiceProductos } from '../../services/service-productos';

import { ServicePFinal } from '../../services/service-p-final';

import { InterfaceProducto } from '../../interfaces/interface-producto.interface';
@Component({
  selector: 'app-component-prouducto',
  imports: [],
  templateUrl: './component-prouducto.html',
  styleUrl: './component-prouducto.css',
})
export class ComponentProuducto {

  precioTotalProducto: number;


  constructor() {
    this.precioTotalProducto = 0;
  }

  ServiceProductos = inject(ServiceProductos);
  ServicePFinal = inject(ServicePFinal);

  @Input() producto!: InterfaceProducto;
  @Input() currency!: string;


  ngOnInit(): void {
    this.currency = this.ServiceProductos.obtenerCurrency();
  }


  valorInput(): number {

    return this.ServicePFinal.getCantidad(this.producto.sku);

  }

  botonMas() {

    this.ServicePFinal.añadirProducto(this.producto);

  }

  botonMenos() {

    this.ServicePFinal.quitarCantidad(this.producto.sku);

    if(this.ServicePFinal.getCantidad(this.producto.sku)==0){

      this.ServicePFinal.eliminarProducto(this.producto.sku);

    }


  }




}
