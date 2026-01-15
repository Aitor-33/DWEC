import { Component } from '@angular/core';
import { ComponentNavbar } from "../../components/component-navbar/component-navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-dashboard',
  imports: [ComponentNavbar, RouterOutlet],
  templateUrl: './page-dashboard.html',
  styleUrl: './page-dashboard.css',
})
export class PageDashboard {

}
