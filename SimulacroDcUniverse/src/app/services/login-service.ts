import { inject, Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {


    private httpClient = inject(HttpClient);
    private baseUrl: string = 'http://localhost:8080/api/login';

    constructor() { }

    login(user: Iuser): Promise<any> {
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl, user));
    }

}
