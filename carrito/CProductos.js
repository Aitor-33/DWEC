export default class CProductos{

    

    constructor(SKU, Title, Price){
        
        this.SKU = SKU;
        this.Title = Title;
        this.Price = parseFloat(Price);

    }

    getSKU() {
        return this.SKU;
    } 


    getTitle() {
        return this.Title;
    }
    

    getPrice() {
        return this.Price;
    } 


getInfo() {
    return `${this.SKU} (${this.Title}) - ${this.Price}€`;
  }

}

export class carrito{

    constructor(currency, products){

        this.currency = currency;
        this.products = products;


    }
}