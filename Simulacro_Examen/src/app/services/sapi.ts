import { Injectable } from '@angular/core';
import { Iproducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class Sapi {

  arrayProductos: Iproducto[];




  constructor(){
    this.arrayProductos = [];

  fetch('http://localhost:8080/api/products')
          .then(response => response.json())
          .then(data =>{
            data.forEach((producto: Iproducto) => {
              this.arrayProductos.push(producto);
            });


      });

}

obtenerProductos(): Iproducto[] {

    return this.arrayProductos;
    console.log(this.arrayProductos);


  }

}
