import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {


  //esto es asi tal cual siempre que vamos a usar el interceptor
  const cloneRequest = req.clone({
        setHeaders: {
            'Content-type': 'aplication/json',
            'Authorization': localStorage.getItem("accessToken") || ""
        }
    });

    if (cloneRequest.url.includes("auth")) {
        return next(req);
    }
    else {
        return next(cloneRequest);
    };
};
