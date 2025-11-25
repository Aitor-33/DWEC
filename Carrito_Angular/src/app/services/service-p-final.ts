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

// aqui lo que hago es añadir el producto al array si no existe, y si existe le sumo 1 a la cantidad
  añadirProducto(producto: InterfaceProducto): void {

    let productoF = this.arrayProductosfinal.find(item => item.producto.sku === producto.sku);

    if (productoF) {

      productoF.cantidad++;

    } else {

      this.arrayProductosfinal.push({producto: producto, cantidad: 1});

    }
  }

// aqui lo que hago es restar 1 a la cantidad del producto, si la cantidad es 0 no hago nada
  quitarCantidad(sku: string): void {

    let valor = this.arrayProductosfinal.find(valor => valor.producto.sku === sku);

    if (valor) {

      if (valor.cantidad >= 1) {

        valor.cantidad--;

      }
    }
  }

// aqui hago es coger la cantidad de un producto
  getCantidad(sku: string): number {

    let valor = this.arrayProductosfinal.find(valor => valor.producto.sku === sku);

    if (valor) {

      return valor.cantidad

    } else {

      return 0;

    }
  }

// aqui hago es coger el precio total de un producto
  getPrecioProducto(sku: string): number {

    let valor = this.arrayProductosfinal.find(valor => valor.producto.sku === sku);

    if (valor) {

      let precio = Number(valor.producto.price) * valor.cantidad;

      let precioFinal = parseFloat(precio.toFixed(2));

      return precioFinal;

    } else {

      return 0;

    }

  }


  getProductosDelCarrito(): InterfacePFinal[] {

    return this.arrayProductosfinal;

  }

      eliminarProducto(sku: String): void{

        let i = this.arrayProductosfinal.findIndex(p => p.producto.sku == sku);

        if (i != -1 && i >= 0 && i < this.arrayProductosfinal.length) {

            this.arrayProductosfinal.splice(i, 1);

        }
    }

  getTotalCarrito(): number {

    let total = 0;

    this.arrayProductosfinal.forEach(item => {

      const precio = Number(item.producto.price) * item.cantidad;

      total += parseFloat(precio.toFixed(2));

    });

    return total;

  }

}
