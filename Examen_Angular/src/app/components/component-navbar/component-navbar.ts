import { Component, inject } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { SProductos } from '../../services/s-productos';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-component-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './component-navbar.html',
  styleUrl: './component-navbar.css',
})
export class ComponentNavbar {

    SProductos = inject(SProductos);

}
