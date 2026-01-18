import { ProductService } from './../../services/product-service';
import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Iproducto } from '../../interfaces/iproducto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() producto!:Iproducto;

  @Output() productoEliminado = new EventEmitter<number>();

  router = inject(Router);

  ProductService = inject(ProductService);


  async deleteProduct(producto: Iproducto) {

    const response = await this.ProductService.deleteById(producto.id);



      Swal.fire({
        title: 'Eliminado',
        text: 'El producto: ' + producto.title + ' ha sido eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'aceptar',
        timer: 6000
      })

    }
  }


