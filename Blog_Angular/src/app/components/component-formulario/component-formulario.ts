import { Component, EventEmitter, Output } from '@angular/core';
import { InterfaceNoticia } from '../../interfaces/interface-noticia';

@Component({
  selector: 'app-component-formulario',
  imports: [],
  templateUrl: './component-formulario.html',
  styleUrl: './component-formulario.css',
})
export class ComponentFormulario {

 @Output() nuevaNoticia = new EventEmitter<InterfaceNoticia>();

  titulo = '';
  imagen = '';
  cuerpoNoticia = '';
  fechaNoticia = '';

  enviarNoticia() {
    const noticia: InterfaceNoticia = {
      titulo: this.titulo,
      imagen: this.imagen,
      cuerpoNoticia: this.cuerpoNoticia,
      fechaNoticia: new Date(this.fechaNoticia),
    };

    this.nuevaNoticia.emit(noticia);

    // Resetear campos opcional
    this.titulo = '';
    this.imagen = '';
    this.cuerpoNoticia = '';
    this.fechaNoticia = '';
}
}
