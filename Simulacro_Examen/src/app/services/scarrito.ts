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

    //metodo para insertar el producto introducido
  insertarProducto(producto: Iproducto): void {

    if (!this.arrProductos.includes(producto) && producto != null) {

      this.arrProductos.push(producto);

    }
  }

  //metodo para recoger un producto por su id y validado para que si no existe nos salgo uno predefinido
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

    //lo mismo del de arriba pero con name
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

    //aqui esta el metodo para borrar por el nombre si quisiera eliminarlo por id solo seria cambiarlo es sencillo
    deleteByName(name: string): void {
        // this.arrSeries = this.arrSeries.filter(serie => serie.title !== title);
        // console.log(this.arrSeries);

        let i = this.arrProductos.findIndex(producto => producto.name == name);
        if (i != -1 && i >= 0 && i < this.arrProductos.length) {
            this.arrProductos.splice(i, 1);
        }
    }

}
