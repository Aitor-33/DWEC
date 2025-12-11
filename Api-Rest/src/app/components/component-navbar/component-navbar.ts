import { Component, inject } from '@angular/core';

import { RouterLink, RouterLinkActive } from "@angular/router";
import { ServiceApi } from '../../services/service-api';

@Component({
  selector: 'app-component-navbar',
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './component-navbar.html',
  styleUrl: './component-navbar.css',
})
export class ComponentNavbar {


  Sapi = inject(ServiceApi);




}
