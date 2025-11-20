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
    // Llamada a la API para obtener los productos
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

}



