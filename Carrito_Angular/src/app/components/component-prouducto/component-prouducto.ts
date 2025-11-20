import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { ServiceProductos } from '../../services/service-productos';

import { InterfaceProducto } from '../../interfaces/interface-producto.interface';
@Component({
  selector: 'app-component-prouducto',
  imports: [],
  templateUrl: './component-prouducto.html',
  styleUrl: './component-prouducto.css',
})
export class ComponentProuducto {

  ServiceProductos = inject(ServiceProductos);

  @Input() producto!: InterfaceProducto[];
  @Input() currency!: string;


}
