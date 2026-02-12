import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const cloneRequest = req.clone({
    setHeaders: {

      Authorization: `Bearer ${localStorage.getItem('token') || ''}`

    }

  });

  if (req.url.includes('/login')) {

    return next(req);

  }else{

    return next(cloneRequest);

  }

};
