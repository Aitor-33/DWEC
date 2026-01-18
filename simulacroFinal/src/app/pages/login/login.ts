import { Dashboard } from './../dashboard/dashboard';
import { UserService } from './../../services/user-service';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserInterface } from '../../interfaces/user-interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private UserService = inject(UserService);
  private router = inject(Router)

  async getUser(loginForm: NgForm) {

    const usuarioLogin: UserInterface = loginForm.value as UserInterface;

    usuarioLogin.expiresInMins = 30;

    try {

      let response = await this.UserService.login(usuarioLogin);
      console.log(usuarioLogin);

      if (response.accessToken && response.refreshToken) {

        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);

        this.router.navigate(['/dashboard']);

      }


    } catch (error) {

      Swal.fire({
        title: 'Error',
        text: 'no se ha podido iniciar sesion',
        icon: 'error',
        confirmButtonText: 'aceptar',
        timer: 8000
      });
      loginForm.reset();

    }



  }

}
