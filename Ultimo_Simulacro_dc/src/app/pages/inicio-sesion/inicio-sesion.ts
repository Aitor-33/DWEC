import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SUsuarios } from '../../service/s-usuarios';
import { IUsers } from '../../interface/iusers';

@Component({
  selector: 'app-inicio-sesion',
  imports: [FormsModule, RouterLink],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css',
})
export class InicioSesion {

  private userService= inject(SUsuarios)
  private router = inject(Router);

ngOnInit(): void{
  if(localStorage.getItem('token')){
      this.router.navigate(['/home'])
  }
}

  async getUser(loginForm : NgForm) {
    const loginUser: IUsers = loginForm.value as IUsers;
    
    try{
      let response = await this.userService.login(loginUser);
      console.log(response);
      if(response.token) {
        localStorage.setItem("token", response.token);
        this.router.navigate(['/dashboard'])
        loginForm.reset();
      }
    } catch (error){
      alert("Credenciales incorrectos");
      loginForm.reset();
    }

}

}
