import { Component, inject } from '@angular/core';
import { InterfaceProducto } from '../../interfaces/interface-producto.interface';
import { ServiceProductos } from '../../services/service-productos';
import { ComponentProuducto } from "../component-prouducto/component-prouducto";

@Component({
  selector: 'app-component-lista-productos',
  imports: [ComponentProuducto],
  templateUrl: './component-lista-productos.html',
  styleUrl: './component-lista-productos.css',
})
export class ComponentListaProductos {

    arrayDeProductos: InterfaceProducto[];


  //Inyeccion de dependencia del Servicio --> Equivalente al Auto-Wired
    ServiceProductos = inject(ServiceProductos);

    constructor() {
        this.arrayDeProductos = [];
    }

    ngOnInit(): void {
        this.arrayDeProductos = this.ServiceProductos.obtenerProductos();
    }


}
