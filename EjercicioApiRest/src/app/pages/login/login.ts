import { Sauth } from '../../services/Sauth';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Iauth } from '../../interfaces/iauth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  //importamos el servicio de autenticación para el login
  private Sauth = inject(Sauth);
  private router = inject(Router);

  ngOnInit(): void {
    //aqui lo que hago es que si tiene el accessToken en el localStorage
    //lo redirijo al home directamente
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/home']);
    }
  }

  async getUser(loginForm: NgForm) {
    const loginUser: Iauth = loginForm.value as Iauth;
    loginUser.expiresInMins = 30;

    //Hay que hacer la petición de login
    try {
      let response = await this.Sauth.login(loginUser);
      console.log(response);
      //qaqui lo que hago es guardar los tokens en el localStorage
      //y redirigir a la página de home
      if (response.accessToken && response.refreshToken) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);

        this.router.navigate(['/home']);
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
