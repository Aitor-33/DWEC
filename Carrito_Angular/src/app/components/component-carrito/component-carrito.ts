import { ServicePFinal } from './../../services/service-p-final';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-component-carrito',
  imports: [],
  templateUrl: './component-carrito.html',
  styleUrl: './component-carrito.css',
})
export class ComponentCarrito {

ServicePFinal = inject(ServicePFinal);


}
