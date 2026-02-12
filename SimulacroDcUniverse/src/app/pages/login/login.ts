import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Iuser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private LoginService = inject(LoginService);
  private router = inject(Router);

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }

  async getUser(loginForm: NgForm) {
    const loginUser: Iuser = loginForm.value as Iuser;

    //Hay que hacer la petición de login
    try {
      let response = await this.LoginService.login(loginUser);
      console.log(response); //recuerda que los token se tienen que llamar exactamente igual que en la api
      if (response.token) {
        localStorage.setItem("token", response.token);

        this.router.navigate(['/heroes']);
        loginForm.reset();
      }

    } catch (error) {
      alert("Credenciales incorrectos");
      loginForm.reset();
    }

  }

}
