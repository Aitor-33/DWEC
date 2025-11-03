import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuentaAtrasComponent } from "./components/cuenta-atras-component/cuenta-atras-component";

@Component({
  selector: 'app-root',
  imports: [CuentaAtrasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejemploInput');

primerContador: number = 23;
segundoContador: number = 7;
tercerContador: number = 13;

}
