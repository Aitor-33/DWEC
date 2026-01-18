import { Component, inject } from '@angular/core';
import { ProductCard } from "../../components/product-card/product-card";
import { ProductService } from '../../services/product-service';
import { Iproducto } from '../../interfaces/iproducto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productlist',
  imports: [ProductCard],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {

  productoService = inject(ProductService);

  productolist: Iproducto[] = [];


  constructor() {
    this.productolist = [];
  }


  async ngOnInit(): Promise<void> {

    try {

      this.productolist = await this.productoService.getAllproducts();

    } catch (err) {

            Swal.fire({
              title: 'error',
              text: 'error al cargar los productos',
              icon: 'error',
              confirmButtonText: 'aceptar',
              timer: 6000
            })

    }

  }


}
