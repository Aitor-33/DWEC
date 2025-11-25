import { ServiceProductos } from './../../services/service-productos';
import { ServicePFinal } from './../../services/service-p-final';
import { Component, inject, Input } from '@angular/core';
import { InterfacePFinal } from '../../interfaces/interface-p-final.interface';


@Component({
  selector: 'app-component-carrito',
  imports: [],
  templateUrl: './component-carrito.html',
  styleUrl: './component-carrito.css',
})
export class ComponentCarrito {

  ServicePFinal = inject(ServicePFinal);
  ServiceProductos = inject(ServiceProductos);

  currency:string;

  arrayPCarrito: InterfacePFinal[];

  constructor() {

    this.arrayPCarrito = [];
    this.currency = "";

  }

  ngOnInit(): void {

    this.arrayPCarrito = this.ServicePFinal.getProductosDelCarrito();
    this.ServiceProductos.obtenerCurrency();

  }

  calcularTotalCarrito(): number {
    return this.ServicePFinal.getTotalCarrito();
  }






}
