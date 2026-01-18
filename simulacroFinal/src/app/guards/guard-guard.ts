import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

//esto viene al crear la guarada
export const guardGuard: CanActivateFn = (route, state) => {


const router = inject(Router);

//esta es una variable para guardar si esta autenticado o no
let isAuth: boolean = false;
//el true le dejaria pasar a la ruta y el false no

//este if lo que hace es que si el accesstoken esta en el localStrorage
// cambie isAuth a true y le deje entrar a la ruta
if(localStorage.getItem('accessToken')){

  isAuth = true;

}else {
//si lo de arriba no se cumple te manda directamente al login
  router.navigate(['/login']);

}

return isAuth;

};
