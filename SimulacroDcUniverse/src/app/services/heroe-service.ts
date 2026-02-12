import { inject, Injectable } from '@angular/core';
import { Iheroe } from '../interfaces/iheroe';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {


  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/api';

  async getAllHeroes(): Promise<Iheroe[]> {

    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + "/characters")).then(response => response.content);

  }


  async deleteHeroById(heroeId: number): Promise<Iheroe> {
    return lastValueFrom(this.httpClient.delete<Iheroe>(this.baseUrl + "/characters/" + heroeId));
  }

  async getHeroeId(heroeId: number): Promise<Iheroe> {
    return lastValueFrom(this.httpClient.get<Iheroe>(this.baseUrl + "/characters/" + heroeId));
  }
}
