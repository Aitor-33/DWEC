import { ProductInterface } from "./product-interface"

export interface PagesInterface {
  total: number;
  skip: number;
  limit: number;
  products: ProductInterface[];
}
