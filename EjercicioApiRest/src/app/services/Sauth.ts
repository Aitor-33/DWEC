import { inject, Injectable } from '@angular/core';
import { Iauth } from '../interfaces/iauth';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Sauth {
    private httpClient = inject(HttpClient);
    private baseUrl: string = 'https://dummyjson.com/auth/';

    constructor() { }

    login(user: Iauth): Promise<any> {
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "login", user));
    }
}
