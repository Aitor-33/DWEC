import { Sapi } from './../../services/sapi';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
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
//aqui pillo las cosas del formulario
    id: new FormControl(null, [Validators.required]),
    name:new FormControl(null, [Validators.required, Validators.minLength(3)]),
    description:new FormControl(null, [Validators.required]),
    price:new FormControl(null, [Validators.required]),
    category:new FormControl(null, [Validators.required]),
    image:new FormControl(null, [Validators.required]),
    active:new FormControl(null, [Validators.required]),
  },[]);

}

//aqui recojo los datos del formulario y lo inserto en el array
getDataForm(){
  let producto = this.productoForm.value as Iproducto;

  this.sCarrito.insertarProducto(producto);

  console.log(producto);

  this.productoForm.reset();

}

//esto es para las lineas rojas cuando no esta bien el formato y todo eso
    checkControl(formControlName: string, validator: string): boolean | undefined {
        return this.productoForm.get(formControlName)?.hasError(validator) && this.productoForm.get(formControlName)?.touched
    }

}
