import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNavbar } from "./components/component-navbar/component-navbar";
import { ComponentNoticias } from "./components/component-noticias/component-noticias";
import { ComponentFooter } from "./components/component-footer/component-footer";
import { ComponentFormulario } from "./components/component-formulario/component-formulario";
//import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  //BrowseModule
  imports: [RouterOutlet, ComponentNavbar, ComponentNoticias, ComponentFooter, ComponentFormulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Blog_Angular');
}
