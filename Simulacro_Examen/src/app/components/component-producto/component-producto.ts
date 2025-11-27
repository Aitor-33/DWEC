import { Iproducto } from '../../interfaces/iproducto';
import { Sapi } from './../../services/sapi';
import { Component, inject, Input, input } from '@angular/core';

@Component({
  selector: 'app-component-producto',
  imports: [],
  templateUrl: './component-producto.html',
  styleUrl: './component-producto.css',
})
export class ComponentProducto {

  Sapi = inject(Sapi);

  @Input() producto!:Iproducto;
  @Input() currency!:string;



  ngOnInit():void{
    this.currency = this.Sapi.obtenerCurrency();
  }


}
