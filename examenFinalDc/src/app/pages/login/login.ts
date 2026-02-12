import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero-service';
import Swal from 'sweetalert2';
import { FormsModule, NgForm } from '@angular/forms';
import { Ilogin } from '../../interfaces/ilogin';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    //importamos el servicio de autenticación para el login
  private HeroService = inject(HeroService);
  private router = inject(Router);

  ngOnInit(): void {
    //aqui lo que hago es que si tiene el accessToken en el localStorage
    //lo redirijo al home directamente
    if (localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

  async getUser(loginForm: NgForm) {
    const loginUser: Ilogin = loginForm.value as Ilogin;

    //Hay que hacer la petición de login
    try {
      let response = await this.HeroService.login(loginUser);
      console.log(response);
      //qaqui lo que hago es guardar los tokens en el localStorage
      //y redirigir a la página de home
      if (response.token) {
        localStorage.setItem("token", response.token);

        this.router.navigate(['/landingpage']);
        loginForm.reset();
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.',
      });
      loginForm.reset();
    }

  }
}
