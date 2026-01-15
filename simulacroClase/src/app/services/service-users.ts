import { inject, Injectable } from '@angular/core';
import { InterfaceUser } from '../interfaces/interface-user';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceUsers {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://dummyjson.com/auth/';

  constructor() { }

  // metodo para el login con su peticion a api
  login(user: InterfaceUser): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "login", user));
  }


}
