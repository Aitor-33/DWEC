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
    if (this.nuevaNoticia.titulo.trim() &&
        this.nuevaNoticia.imagen.trim() &&
        this.nuevaNoticia.cuerpoNoticia.trim()) {

      // esto manda la noticia al padre en este caso component-blog
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


