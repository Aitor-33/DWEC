import { ProductInterface } from './../interfaces/product-interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PagesInterface } from '../interfaces/pages-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private baseUrlP: string = 'https://dummyjson.com/products';

  httpClient = inject(HttpClient);


  async getAllProducts(page: number = 1): Promise<PagesInterface> {

  const limit = 10; // productos por pagina
  const skip = (page - 1) * limit;

  const response = await lastValueFrom(
    this.httpClient.get<PagesInterface>(
      `${this.baseUrlP}?limit=${limit}&skip=${skip}`
    )
  );

  return response;
}





  async deleteProduct(id: number): Promise<ProductInterface> {
    return lastValueFrom(this.httpClient.delete<ProductInterface>(`${this.baseUrlP}/${id}`));
  }

}
