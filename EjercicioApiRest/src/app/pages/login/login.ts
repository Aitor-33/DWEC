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

  private Sauth = inject(Sauth);
  private router = inject(Router);

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/dashboard']);
    }
  }

  async getUser(loginForm: NgForm) {
    const loginUser: Iauth = loginForm.value as Iauth;
    loginUser.expiresInMins = 30;

    //Hay que hacer la petición de login
    try {
      let response = await this.Sauth.login(loginUser);
      console.log(response);
      if (response.accessToken && response.refreshToken) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);

        this.router.navigate(['/dashboard']);
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
