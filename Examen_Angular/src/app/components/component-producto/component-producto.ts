import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SProductos } from '../../services/s-productos';
import { IProducto } from '../../interfaces/i-producto';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-component-producto',
  imports: [RouterLink],
  templateUrl: './component-producto.html',
  styleUrl: './component-producto.css',
})
export class ComponentProducto {


  SProductos = inject(SProductos);

  @Input() producto!:IProducto;

  router = inject(Router);

  //output de eliminar
@Output() eliminar = new EventEmitter<string>();

  ngOnInit():void{

  }

  //aqui el metodo de elimnar que hay que mandarlo mediante un output
    deleteProducto(producto: IProducto) {
        this.SProductos.deleteById(producto.id);
        this.eliminar.emit(this.producto.id);
    }


        seeDetails(producto: IProducto) {
        this.router.navigate(['/formulario', producto.id]);

    }

}
