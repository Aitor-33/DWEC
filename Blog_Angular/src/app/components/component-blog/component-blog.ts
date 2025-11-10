import { Component } from '@angular/core';
import { ComponentNavbar } from "../component-navbar/component-navbar";
import { ComponentNoticias } from "../component-noticias/component-noticias";
import { ComponentFormulario } from "../component-formulario/component-formulario";
import { ComponentFooter } from "../component-footer/component-footer";

@Component({
  selector: 'app-component-blog',
  imports: [ComponentNavbar, ComponentNoticias, ComponentFormulario, ComponentFooter],
  templateUrl: './component-blog.html',
  styleUrl: './component-blog.css',
})
export class ComponentBlog {

}
