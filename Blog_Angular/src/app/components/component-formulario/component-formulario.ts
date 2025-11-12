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

 @Output() noticiaCreada = new EventEmitter<InterfaceNoticia>();



  nuevaNoticia: InterfaceNoticia = {
    titulo: "",
    imagen: "",
    cuerpoNoticia: "",
    fechaNoticia: new Date()
  }

  guardarDatos() {
    // esto comprueba si estan vacios o no
    //lo que hace trim() es eliminar los espacios al principio y al final
    //no he sabido como validar la fecha porque si dejas vacio el datepicker te pone automaica la fecha de hoy
    if (this.nuevaNoticia.titulo.trim() &&
        this.nuevaNoticia.imagen.trim() &&
        this.nuevaNoticia.cuerpoNoticia.trim()) {

      // esto manda la noticia al padre en este caso component-blog
      //Los ... sirven en este caso para que cuando envies this.nuevaNoticia se envie una copia en vez de el original
      //esto esta bien porque si por cualquier cosa al enviarlo a noticias se modifica no modifica el original
      this.noticiaCreada.emit({...this.nuevaNoticia});

      // esto vacia el formulario
      this.nuevaNoticia = {
        titulo: "",
        imagen: "",
        cuerpoNoticia: "",
        fechaNoticia: new Date()
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}


