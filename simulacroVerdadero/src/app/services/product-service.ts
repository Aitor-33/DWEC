import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iproducto } from '../interfaces/iproducto';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  HttpClient = inject(HttpClient);

  baseUrl: string = 'https://api.escuelajs.co/api/v1/products';

constructor() {}


  getAllproducts(): Promise<Iproducto[]> {
    return lastValueFrom(this.HttpClient.get<Iproducto[]>(this.baseUrl));

  }

  deleteById(id: number): Promise<Iproducto> {
    return lastValueFrom(this.HttpClient.delete<Iproducto>(this.baseUrl + '/' + id));
  }
}
