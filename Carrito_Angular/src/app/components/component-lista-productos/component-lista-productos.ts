import { Component } from '@angular/core';
import { InterfaceProducto } from '../../interfaces/interface-producto.interface';
import { ServiceProductos } from '../../services/service-productos';

@Component({
  selector: 'app-component-lista-productos',
  imports: [],
  templateUrl: './component-lista-productos.html',
  styleUrl: './component-lista-productos.css',
})
export class ComponentListaProductos {

  arrayDeProductos: InterfaceProducto[];


  constructor(private serviceProductos : ServiceProductos){

    this.arrayDeProductos = this.serviceProductos.obtenerProductos();

  }
}
