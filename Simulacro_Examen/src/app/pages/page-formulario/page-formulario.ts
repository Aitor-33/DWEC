import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink} from '@angular/router';
import { Iproducto } from '../../interfaces/iproducto';
import { SCarrito } from '../../services/scarrito';

@Component({
  selector: 'app-page-formulario',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './page-formulario.html',
  styleUrl: './page-formulario.css',
})
export class PageFormulario {

  productoForm: FormGroup;

    sCarrito = inject(SCarrito);

    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);


constructor(){

  this.productoForm = new FormGroup({

    sku: new FormControl(null, [Validators.required]),
    title:new FormControl(null, [Validators.required]),
    price:new FormControl(null, [Validators.required]),
    image:new FormControl(null, [Validators.required]),
  },[]);

}

getDataForm(){

  let producto = this.productoForm.value as Iproducto;

  this.sCarrito.insertarProducto(producto);

}


}
