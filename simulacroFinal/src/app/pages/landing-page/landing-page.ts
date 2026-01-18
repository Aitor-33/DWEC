import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  isToken:boolean;

  Sproducts = inject(ProductService);

  constructor(){
    this.isToken = false;
  }

    ngOnInit(): void {
        if (localStorage.getItem('accessToken')) {
            this.isToken = true;
        }
    }


    obtenerProductos(){
      this.Sproducts.getAllProducts();
    }

}
