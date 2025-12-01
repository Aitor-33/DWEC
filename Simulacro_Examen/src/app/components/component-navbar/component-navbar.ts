import { Sapi } from './../../services/sapi';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-component-navbar',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './component-navbar.html',
  styleUrl: './component-navbar.css',
})
export class ComponentNavbar {

  sapi = inject(Sapi);

  roles: string[];

  rol: string;

  constructor(){

    this.roles = this.sapi.getRoles();
    this.rol = this.roles[0];

  }

}
