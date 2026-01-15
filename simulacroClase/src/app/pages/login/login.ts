import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceUsers } from '../../services/service-users';
import { FormsModule, NgForm } from '@angular/forms';
import { InterfaceUser } from '../../interfaces/interface-user';
@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private userService = inject(ServiceUsers);
  private router = inject(Router);



  async getUser(loginForm: NgForm) {
    const loginUser: InterfaceUser = loginForm.value as InterfaceUser;
    loginUser.expiresInMins = 30;

    //Hay que hacer la petición de login
    try {
      let response = await this.userService.login(loginUser);
      console.log(response);
      if (response.accessToken && response.refreshToken) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        this.router.navigate(['/dashboard']);
        loginForm.reset();
      }

    } catch (error) {
      alert("Credenciales incorrectos");
      loginForm.reset();
    }

  }
}
