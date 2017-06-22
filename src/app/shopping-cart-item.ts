import { Product } from './product';

export class ShoppingCartItem {
    
    constructor(private product:Product, private quantity:number) {}

    public getProduct():Product {
        return this.product;
    }

    public getQuantity():number {
        return this.quantity;
    }

    public increaseQuantity():void {
        this.quantity++;
    }
}
