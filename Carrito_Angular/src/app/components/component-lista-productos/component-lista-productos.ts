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

    ServiceProductos = inject(ServiceProductos);

    productos: InterfaceProducto[] = [];
    currency: string = '';


    ngOnInit(): void {
        this.productos = this.ServiceProductos.obtenerProductos();
        this.currency = this.ServiceProductos.obtenerCurrency();
    }


}
