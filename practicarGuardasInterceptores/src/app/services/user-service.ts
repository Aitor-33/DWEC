import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InterfaceUser } from '../interfaces/interface-user';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

    private httpClient = inject(HttpClient);
    private baseUrl: string = 'https://dummyjson.com/auth/';

    constructor() { }

    login(user: InterfaceUser): Promise<any> {
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "login", user));
    }

}
