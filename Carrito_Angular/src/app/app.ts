import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentListaProductos } from "./components/component-lista-productos/component-lista-productos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Carrito_Angular');
}
