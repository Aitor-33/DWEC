import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponents } from "./component/footer.components/footer.components";
import { NavbarComponents } from "./component/navbar.components/navbar.components";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponents, FooterComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ultimo_Simulacro_dc');
}
