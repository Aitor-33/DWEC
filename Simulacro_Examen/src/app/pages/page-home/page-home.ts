import { Sapi } from './../../services/sapi';
import { Component, inject } from '@angular/core';
import { ComponentProducto } from "../../components/component-producto/component-producto";
import { Iproducto } from '../../interfaces/iproducto';

@Component({
  selector: 'app-page-home',
  imports: [ComponentProducto],
  templateUrl: './page-home.html',
  styleUrl: './page-home.css',
})
export class PageHome {


      Sapi = inject(Sapi);

    productos: Iproducto[];
    currency: string;

    constructor() {

      this.productos = [];
      this.currency = "";
    }


    ngOnInit(): void {
        this.productos = this.Sapi.obtenerProductos();
        this.currency = this.Sapi.obtenerCurrency();
    }



}
