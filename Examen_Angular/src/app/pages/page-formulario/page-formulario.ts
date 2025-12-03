import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProducto } from '../../interfaces/i-producto';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SProductos } from '../../services/s-productos';

@Component({
  selector: 'app-page-formulario',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './page-formulario.html',
  styleUrl: './page-formulario.css',
})
export class PageFormulario {


  productoForm: FormGroup;

  isNew:boolean;

  SProductos = inject(SProductos);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);


  constructor() {

    this.isNew = true;
    this.productoForm = new FormGroup({
      //aqui pillo las cosas del formulario
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      active: new FormControl(null, [Validators.required]),
    }, []);

  }


  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      let id: string = params.id;
      if (id != undefined) {
        //Pedir al servicio la serie por id
        let miProducto = this.SProductos.getById(id);

        if (miProducto != undefined) {

          this.isNew = false;

          this.productoForm = new FormGroup({

            id: new FormControl(miProducto.id, []),
            name: new FormControl(miProducto.name, [Validators.required, Validators.minLength(3)]),
            description: new FormControl(miProducto.description, [Validators.required]),
            price: new FormControl(miProducto.price, [Validators.required]),
            category: new FormControl(miProducto.category, [Validators.required]),
            image: new FormControl(miProducto.image, [Validators.required]),
            active: new FormControl(miProducto.active, [Validators.required]),

          }, []);

        } else {

          alert("No se encuantra la serie en nuestro servicio");

        }
      }
    });


  }

  //aqui recojo los datos del formulario y lo inserto en el array
  getDataForm() {
    let producto = this.productoForm.value as IProducto;

    if(this.isNew){

      this.SProductos.insertarProducto(producto);

    }else{

      this.SProductos.updateProducto(producto);

    }

    console.log(producto);

    this.productoForm.reset();

  }

  //esto es para las lineas rojas cuando no esta bien el formato y todo eso
  checkControl(formControlName: string, validator: string): boolean | undefined {
    return this.productoForm.get(formControlName)?.hasError(validator) && this.productoForm.get(formControlName)?.touched
  }




}
