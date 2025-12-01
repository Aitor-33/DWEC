import { Sapi } from './../../services/sapi';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import { Iproducto } from '../../interfaces/iproducto';
import { SCarrito } from '../../services/scarrito';

@Component({
  selector: 'app-page-formulario',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './page-formulario.html',
  styleUrl: './page-formulario.css',
})
export class PageFormulario {

  productoForm: FormGroup;

    sCarrito = inject(SCarrito);

    Sapi = inject(Sapi)

    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);


constructor(){

  this.productoForm = new FormGroup({

    id: new FormControl(null, [Validators.required]),
    name:new FormControl(null, [Validators.required]),
    description:new FormControl(null, [Validators.required]),
    price:new FormControl(null, [Validators.required]),
    category:new FormControl(null, [Validators.required]),
    image:new FormControl(null, [Validators.required]),
    active:new FormControl(null, [Validators.required]),
  },[]);

}

getDataForm(){

  let producto = this.productoForm.value as Iproducto;

  this.sCarrito.insertarProducto(producto);

  console.log(producto);

  this.productoForm.reset();

}


}
