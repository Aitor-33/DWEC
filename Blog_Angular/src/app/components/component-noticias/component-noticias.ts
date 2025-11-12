import { ServiceFormulario } from './../../services/service-formulario';
import { Component } from '@angular/core';
import { InterfaceNoticia } from '../../interfaces/interface-noticia';
import { DatePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-noticias',
  imports: [DatePipe],
  templateUrl: './component-noticias.html',
  styleUrl: './component-noticias.css',
})
export class ComponentNoticias {

    arrayNoticias: InterfaceNoticia[]  = [];

    //aqui hago un constructor en el cual le damos a array noticias el valor que es sacado
    //de la funcion obtener noticias que lo que hace es devolverme el array con todas las noticias que haya
    constructor(private serviceFormulario : ServiceFormulario){

      this.arrayNoticias= this.serviceFormulario.obtenerNoticias();

  }


}
