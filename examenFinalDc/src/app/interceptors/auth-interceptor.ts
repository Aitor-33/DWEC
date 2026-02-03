import { HttpInterceptorFn } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const cloneRequest = req.clone({
        setHeaders: {
            'Content-type': 'application/json',
            'login': localStorage.getItem("token") || ""
        }
    });

    if (cloneRequest.url.includes("login")) {
        return next(req);
    }
    else {
        return next(cloneRequest);
    };
};
