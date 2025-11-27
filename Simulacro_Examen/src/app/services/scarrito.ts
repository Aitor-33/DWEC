import { inject, Injectable } from '@angular/core';
import { Iproducto } from '../interfaces/iproducto';
import { Sapi } from './sapi';

@Injectable({
  providedIn: 'root',
})
export class SCarrito {

    arrProductos:Iproducto[];

    serviceApi = inject(Sapi);

    constructor(){

      this.arrProductos = this.serviceApi.obtenerProductos();

    }

  insertarProducto(producto: Iproducto): void {

    if (!this.arrProductos.includes(producto) && producto != null) {

      this.arrProductos.push(producto);

    }
  }






}
