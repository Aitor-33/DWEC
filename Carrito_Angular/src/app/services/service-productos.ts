import { Injectable } from '@angular/core';
import { InterfaceProducto } from '../interfaces/interface-producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceProductos {

  arrayProductos: InterfaceProducto[];
  currency: string;


  //ATENCION AITOR DEL FUTURO CURRENCY ESTA MAL CAMBIALO MAMON
  constructor(){
    this.arrayProductos = [];
    this.currency = "";

  

  fetch('http://localhost:8080/api/carrito')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el JSON');
      }
      return response.json();
    })
    .then(data => {
          this.arrayProductos.push(data.products);
          
  })
    .catch(error => console.error(error));
}
  
obtenerProductos(): InterfaceProducto[] {
    return this.arrayProductos;
  }

}



