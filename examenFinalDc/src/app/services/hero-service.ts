import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Ilogin } from '../interfaces/ilogin';
import { lastValueFrom } from 'rxjs';
import { IHero } from '../interfaces/ihero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  

      private httpClient = inject(HttpClient);
    //la URL base del servicio de autenticación
    private baseUrl: string = 'http://localhost:8080/api';

    constructor() { }

    //le hacemos la petición de login al backend
    login(user: Ilogin): Promise<any> {
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "/login", user));
    }

  async getAllUsers(page: number): Promise<IHero[]> {

    const response = await lastValueFrom(this.httpClient.get<IHero[]>(this.baseUrl + "/characters"));

    return response; 

  }

  async deleteHeroById(id: number): Promise<IHero> { //Eliminamos un heroe por su id
    let response = lastValueFrom(this.httpClient.delete<IHero>(`${this.baseUrl}/characters/${id}`));
  return response;
  }

  async createHero(hero: IHero): Promise<IHero> { //Creamos un heroe
    let response = lastValueFrom(this.httpClient.post<IHero>(this.baseUrl + "/characters", hero));
      return response;
  }

  async updateHero(hero: IHero): Promise<IHero> { //Actualizamos un heroe
    let response = lastValueFrom(this.httpClient.put<IHero>(this.baseUrl + "/characters", hero));
      return response;
  }

    async getHeroById(id: number): Promise<IHero> { //Obtenemos un heroe por su id
    let response = lastValueFrom(this.httpClient.get<IHero>(this.baseUrl + '/characters' + id)); //esta es la otra forma de pedir con la url
      return response;
  }

}
