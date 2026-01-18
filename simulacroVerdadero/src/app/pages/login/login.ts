import { LoginService } from './../../services/login-service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Iuser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  private LoginService = inject(LoginService);
  private router = inject(Router);

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }

  async getUser(loginForm: NgForm) {
    const loginUser: Iuser = loginForm.value as Iuser;

    //Hay que hacer la petición de login
    try {
      let response = await this.LoginService.login(loginUser);
      console.log(response); //recuerda que los token se tienen que llamar exactamente igual que en la api
      if (response.access_token && response.refresh_token) {
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);

        this.router.navigate(['/home']);
        loginForm.reset();
      }

    } catch (error) {
      alert("Credenciales incorrectos");
      loginForm.reset();
    }

  }
}
