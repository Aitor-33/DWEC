import { Injectable } from '@angular/core';
import { InterfaceProducto } from '../interfaces/interface-producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceProductos {

  arrayProductos: InterfaceProducto[];
  currency: string;




  constructor(){
    this.arrayProductos = [];
    this.currency = "";

  fetch('http://localhost:8080/api/carrito')
          .then(response => response.json())
          .then(data =>{
            data.products.forEach((producto: InterfaceProducto) => {
              this.arrayProductos.push(producto);
              this.currency = data.currency;
            });


      });

}

obtenerProductos(): InterfaceProducto[] {

    return this.arrayProductos;

  }

  obtenerCurrency(): string {

    return this.currency;

  }

}



