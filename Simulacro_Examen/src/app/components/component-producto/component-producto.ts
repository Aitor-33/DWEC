import { SCarrito } from './../../services/scarrito';
import { Iproducto } from '../../interfaces/iproducto';
import { Sapi } from './../../services/sapi';
import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-component-producto',
  imports: [RouterLink],
  templateUrl: './component-producto.html',
  styleUrl: './component-producto.css',
})
export class ComponentProducto {

  Sapi = inject(Sapi);

  SCarrito = inject(SCarrito);

  @Input() producto!:Iproducto;

  router = inject(Router);

@Output() eliminar = new EventEmitter<string>();

  ngOnInit():void{

  }

    deleteProducto(producto: Iproducto) {
        this.SCarrito.deleteByName(producto.name);
        this.eliminar.emit(this.producto.name);
    }


}
