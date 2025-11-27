import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNavbar } from "./components/component-navbar/component-navbar";
import { ComponentFooter } from "./components/component-footer/component-footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentNavbar, ComponentFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Simulacro_Examen');

}
