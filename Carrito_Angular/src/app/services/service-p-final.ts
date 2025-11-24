import { Injectable } from '@angular/core';

import { InterfacePFinal } from '../interfaces/interface-p-final.interface';

import { InterfaceProducto } from '../interfaces/interface-producto.interface';
@Injectable({
  providedIn: 'root',
})
export class ServicePFinal {


  arrayProductosfinal: InterfacePFinal[];


  constructor() {
    this.arrayProductosfinal = [];
  }

  getProductosFinal() {
    return this.arrayProductosfinal;
  }


añadirProducto(producto: InterfaceProducto): void {
      var productoF = this.arrayProductosfinal.find(
      item => item.producto.sku === producto.sku
    );
    if (productoF) {
      productoF.cantidad++;
    } else {
      this.arrayProductosfinal.push({
        producto: producto,
        cantidad: 1

      });
    }
  }


    quitarCantidad(sku: string): void {
    var valor = this.arrayProductosfinal.find(valor => valor.producto.sku === sku);

    if (valor) {
      if (valor.cantidad >= 1) {
      valor.cantidad--;
      }
    }
  }


    getCantidad(sku: string): number {
    var valor = this.arrayProductosfinal.find(valor => valor.producto.sku === sku);
    if(valor){
      return valor.cantidad
    }else{
      return 0;
    }
  }
}
