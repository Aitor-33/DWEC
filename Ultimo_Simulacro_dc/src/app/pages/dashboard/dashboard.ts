import { Component } from '@angular/core';
import { NavbarComponents } from "../../component/navbar.components/navbar.components";
import { FooterComponents } from "../../component/footer.components/footer.components";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FooterComponents, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
