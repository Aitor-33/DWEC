import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentListaProductos } from "./components/component-lista-productos/component-lista-productos";
import { ComponentCarrito } from "./components/component-carrito/component-carrito";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentListaProductos, ComponentCarrito],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Carrito_Angular');
}
