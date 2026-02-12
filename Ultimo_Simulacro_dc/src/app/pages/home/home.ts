import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponents } from "../../component/navbar.components/navbar.components";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  isToken: boolean;

  constructor(){
    this.isToken = false;
  }

  ngOnInit(): void{
    if(localStorage.getItem('token')){
      this.isToken = true;
    }
}


}
