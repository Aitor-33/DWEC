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

      getById(id: number): Iproducto | undefined {
        let producto: Iproducto;

        let response = this.arrProductos.find(student => student.id == id)

        if(response != undefined){

          producto = response;

        }else{
          producto = {
                id: 0,
                name: "Servicio no encontrado",
                description: "Contacte con el adminsitrador",
                price: 0,
                category:"",
                image:"",
                active:false
          }
        }

        return producto;
    }

    getByName(name: string): Iproducto  {
        let producto: Iproducto;
        let response = this.arrProductos.find(p => p.name == name);
        if (response != undefined) {
            producto = response;
        }
        else {
            producto = {
                id: 0,
                name: "Servicio no encontrado",
                description: "Contacte con el adminsitrador",
                price: 0,
                category:"",
                image:"",
                active:false

            }
        }
        return producto;
    }

    deleteByName(name: string): void {
        // this.arrSeries = this.arrSeries.filter(serie => serie.title !== title);
        // console.log(this.arrSeries);

        let i = this.arrProductos.findIndex(producto => producto.name == name);
        if (i != -1 && i >= 0 && i < this.arrProductos.length) {
            this.arrProductos.splice(i, 1);
        }
    }

}
