import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  imports: [RouterLink],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {

  isToken: boolean;

  constructor() {
    this.isToken = false;
  }

  //aqui lo que hago es dentro del ngoninit comprobar que el token este en el local storage 
  //y si lo esta cambio la variable isToken a true
  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.isToken = true;
    }
  }


}
