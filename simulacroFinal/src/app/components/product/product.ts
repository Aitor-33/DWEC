import { ProductInterface } from './../../interfaces/product-interface';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [ RouterLink ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  private productServices = inject(ProductService);
  @Input() product!: ProductInterface;
  @Output() productoEliminado = new EventEmitter<string>()


}
