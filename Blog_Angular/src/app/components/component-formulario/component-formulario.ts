import { ComponentNoticias } from './../component-noticias/component-noticias';
import { Component, EventEmitter, Output } from '@angular/core';
import { InterfaceNoticia } from '../../interfaces/interface-noticia';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-component-formulario',
  imports: [FormsModule, ComponentNoticias],
  templateUrl: './component-formulario.html',
  styleUrl: './component-formulario.css',
})
export class ComponentFormulario {


nuevaNoticia: InterfaceNoticia = {

titulo: "",
imagen: "",
cuerpoNoticia: "",
fechaNoticia: new Date

}


guardarDatos() {
this.nuevaNoticia = {
  titulo: "",
imagen: "",
cuerpoNoticia: "",
fechaNoticia: new Date()
}
agregarNoticia(this.nuevaNoticia)
}
}


