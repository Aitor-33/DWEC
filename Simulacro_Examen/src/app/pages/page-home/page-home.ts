import { Sapi } from './../../services/sapi';
import { Component, inject } from '@angular/core';
import { ComponentProducto } from "../../components/component-producto/component-producto";
import { Iproducto } from '../../interfaces/iproducto';
import { ComponentFiltro } from "../../components/component-filtro/component-filtro";

@Component({
  selector: 'app-page-home',
  imports: [ComponentProducto, ComponentFiltro],
  templateUrl: './page-home.html',
  styleUrl: './page-home.css',
})
export class PageHome {


    Sapi = inject(Sapi);

    filtroCategoria: string = "";


    productos: Iproducto[];

    constructor() {

      this.productos = [];
    }


    ngOnInit(): void {
        this.productos = this.Sapi.obtenerProductos();

    }

    getCourse($event: string) {
        this.productos = this.Sapi.getStudentByCategoria($event);
    }
}
