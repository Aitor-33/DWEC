import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

private router = inject(Router);


// funcion para hacer loguot
logout() {
//aqui lo que se hace es borrar del localStorage los tokens
//para que asi no puedas entrar en las rutas que tienen guarda
localStorage.removeItem('accessToken');
localStorage.removeItem('refreshToken');
this.router.navigate(['/inicio']);
}

}
