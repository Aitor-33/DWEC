import { inject, Injectable } from '@angular/core';
import { Iheroe } from '../interfaces/iheroe';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Ipages } from '../interfaces/ipages';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {


  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/api';

  async getAllHeroes(pages: number = 1): Promise<Ipages> {

    const response = await lastValueFrom(this.httpClient.get<Ipages>(this.baseUrl + "/characters"));

    return response
  }


  async deleteHeroById(heroeId: number): Promise<Iheroe> {
    const response = await lastValueFrom(this.httpClient.delete<Iheroe>(this.baseUrl + "/characters/" + heroeId));

    return response
  }

  async getHeroeId(heroeId: number): Promise<Iheroe> {
    return lastValueFrom(this.httpClient.get<Iheroe>(this.baseUrl + "/characters/" + heroeId));

  }


  async crearHeroe(heroe: Iheroe): Promise<Iheroe>{
    return lastValueFrom(this.httpClient.post<Iheroe>(this.baseUrl + "/characters", heroe));
  }

  async updateHeroe(heroe: Iheroe): Promise<Iheroe>{
    return lastValueFrom(this.httpClient.put<Iheroe>(this.baseUrl + "/characters", heroe));
  }
}
