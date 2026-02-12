import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsers } from '../interface/iusers';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SUsuarios {
  private httpClient = inject(HttpClient);

  private baseUrl: string = 'http://localhost:8080/api/login';

  constructor(){}

  login(user : IUsers): Promise<any>{
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, user))

  }

}
