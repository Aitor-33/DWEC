import { Component, inject } from '@angular/core';
import { PageFormulario } from "../page-formulario/page-formulario";
import { ComponentProducto } from "../../components/component-producto/component-producto";
import { ComponenteFiltro } from "../../components/componente-filtro/componente-filtro";
import { IProducto } from '../../interfaces/i-producto';
import { SProductos } from '../../services/s-productos';

@Component({
  selector: 'app-page-lista-productos',
  imports: [ ComponentProducto, ComponenteFiltro],
  templateUrl: './page-lista-productos.html',
  styleUrl: './page-lista-productos.css',
})
export class PageListaProductos {

  SProductos = inject(SProductos);

  productos: IProducto[];

    constructor() {

      this.productos = [];
    }

    //aqui meto todos los productos desde la api en el array de home
    ngOnInit(): void {
        this.productos = this.SProductos.obtenerProductos();

    }

    //esto es para filtrar mediante un output


//delete para que se borre tambien al filtrar
  deleteProduct(id: string) {
    this.SProductos.deleteById(id);
    this.productos = this.productos.filter(p => p.id !== id);
  }

     getCategoria($event: string) {
        this.productos = this.SProductos.getProductosByCategoria($event);
    }

    getActivo($event: boolean) {
      this.productos = this.SProductos.getProductosByActivo($event);
    }

    getNombre($event: string) {
      this.productos = this.SProductos.getProductosByName($event)
    }

}
