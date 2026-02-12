import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Ipages } from '../interface/ipages';
import { Iheroe } from '../interface/iheroe';

@Injectable({
  providedIn: 'root',
})
export class SHeroes {
  
  private httpClient = inject(HttpClient);

  private baseUrl: string = 'http://localhost:8080/api/characters';



  async getAll(page : number = 1): Promise<Ipages>{
    const resp = await lastValueFrom(this.httpClient.get<Ipages>(`${this.baseUrl}`))
    return resp;
  }

  async getById(id: Number): Promise<Iheroe>{
    return lastValueFrom(this.httpClient.get<Iheroe>(this.baseUrl + '/' + id));
  }

  async crearHeroe(heroe: Iheroe): Promise<Iheroe>{
    return lastValueFrom(
      this.httpClient.post<Iheroe>(this.baseUrl, heroe)
    );
  }

  async actualizarHeroe(heroe: Iheroe): Promise<Iheroe>{
    return lastValueFrom(this.httpClient.put<Iheroe>(`${this.baseUrl}/${heroe.id}`, heroe)
  );
  }

  async eliminarHeroe(id: number): Promise<Iheroe>{
    return lastValueFrom(this.httpClient.delete<Iheroe>(`${this.baseUrl}/${id}`));
  }


}
