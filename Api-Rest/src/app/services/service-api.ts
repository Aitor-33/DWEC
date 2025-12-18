import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Interface } from '../interfaces/interface.interface';
import { lastValueFrom } from 'rxjs';
import { InterfaceUsuario } from '../interfaces/interface-usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceApi {



  private baseUrl: string = 'https://peticiones.online/api/users';

  httpClient = inject(HttpClient);

  constructor() { }



  async getAllUsers(): Promise<InterfaceUsuario[]> {

    const response = await lastValueFrom(this.httpClient.get<Interface>(this.baseUrl));

    return response.results;

  }

  async getUsersBy_Id(_id: String): Promise<InterfaceUsuario> {
    return lastValueFrom(this.httpClient.get<InterfaceUsuario>(this.baseUrl + '/' + _id));
  }


  deleteById(_id: string): Promise<InterfaceUsuario> {
    return lastValueFrom(this.httpClient.delete<InterfaceUsuario>(this.baseUrl + '/' + _id));
  }

  insertarUsuario(usuario: InterfaceUsuario): Promise<InterfaceUsuario> {
    return lastValueFrom(this.httpClient.post<InterfaceUsuario>(this.baseUrl, usuario));

  }

  updateUsuario(usuario: InterfaceUsuario): Promise<InterfaceUsuario> {
    return lastValueFrom(this.httpClient.put<InterfaceUsuario>(`${this.baseUrl}/${usuario._id}`, usuario));

  }


}
