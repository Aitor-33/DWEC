import { Component, ViewChild } from '@angular/core';
import { ComponentNavbar } from "../component-navbar/component-navbar";
import { ComponentNoticias } from "../component-noticias/component-noticias";
import { ComponentFormulario } from "../component-formulario/component-formulario";
import { ComponentFooter } from "../component-footer/component-footer";
import { InterfaceNoticia } from '../../interfaces/interface-noticia';

@Component({
  selector: 'app-component-blog',
  imports: [ComponentNavbar, ComponentNoticias, ComponentFormulario, ComponentFooter],
  templateUrl: './component-blog.html',
  styleUrl: './component-blog.css',
})
export class ComponentBlog {

  //esto sirve para acceder al contenido del componente hijo en este caso compoente noticias
  @ViewChild(ComponentNoticias) noticiasComponent!: ComponentNoticias;

  //aqui utilizo la funcion del hijo para agregar la noticia
  agregarNoticia(noticia: InterfaceNoticia) {
    this.noticiasComponent.agregarNoticia(noticia);
  }
}
