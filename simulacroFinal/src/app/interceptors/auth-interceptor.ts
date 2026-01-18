import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //aqui lo que hacemos es clonar la peticion y añadirle nuestro token
      const cloneRequest = req.clone({
        setHeaders: {
            'Content-type': 'aplication/json',
            'Authorization': localStorage.getItem("accessToken") || ""
        }
    });

    //si la peticion que hemos clonado ya tiene el token
    // lo que haremos sera dejar que siga la original
    if (cloneRequest.url.includes("auth")) {
        return next(req);
    }
    //si no contenia el token mandamos la clonada que si que le tiene añadido
    else {
        return next(cloneRequest);
    };


};
