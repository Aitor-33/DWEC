import { Icategory } from "./icategory";

export interface Iproducto {

  id:number;
  title:string;
  price:number;
  description:string;
  category: Icategory[];
  lug:string;
  creationAt:string;
  updatedAt:string;
  images:string[];
}
