import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

    let isAuth: boolean = false;
    //True deja navegar a la ruta
    //False bloquea el acceso a la ruta

    //si tiene el accessToken en el localStorage dejo navegar
    if (localStorage.getItem('accessToken')) {
        isAuth = true;
    }
    //si no lo tiene lo redirijo al login
    else {
        router.navigate(['/login']);
    }

    return isAuth;
};
