import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNavbar } from "./components/component-navbar/component-navbar";
import { ComponentNoticias } from "./components/component-noticias/component-noticias";

@Component({
  selector: 'app-root',
  imports: [ComponentNavbar, ComponentNoticias],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Blog_Angular');
}
