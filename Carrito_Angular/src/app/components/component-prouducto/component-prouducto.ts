import { Component, Input } from '@angular/core';

import { ServiceProductos } from '../../services/service-productos';

@Component({
  selector: 'app-component-prouducto',
  imports: [],
  templateUrl: './component-prouducto.html',
  styleUrl: './component-prouducto.css',
})
export class ComponentProuducto {

  @Input() productoActual!: ServiceProductos;

}
