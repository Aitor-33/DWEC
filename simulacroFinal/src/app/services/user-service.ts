import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private httpClient = inject(HttpClient);
  //url principal de la api
  private baseUrl: string = 'https://dummyjson.com/auth/';

  constructor(){}

  //funcion para el login es una promise porque estamos haciendo una peticion al servidor
  login(usuario: UserInterface): Promise<any>{

    //lo que hacemos aqui es poner la base de la url que es la api en si y luego agregarle login que es
    //la ruta para la peticion del login y luego añadimos el usuario esto habria que mirarlo en la api que nos da el
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "login", usuario));

  }


}
