import { Iproducto } from '../../interfaces/iproducto';
import { Sapi } from './../../services/sapi';
import { Component, inject, Input, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-producto',
  imports: [],
  templateUrl: './component-producto.html',
  styleUrl: './component-producto.css',
})
export class ComponentProducto {

  Sapi = inject(Sapi);

  @Input() producto!:Iproducto;

  router = inject(Router);



  ngOnInit():void{

  }


      seeDetails(producto: Iproducto) {
        this.router.navigate(['/producto', producto.id]);

    }

}
