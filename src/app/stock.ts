export class Stock {

    constructor(private items:StockItem[]) {}

    getItems():StockItem[] {
        return this.items;
    }

}

export class StockItem {

    constructor(private itemId:number, private quantity:number) {}

    getItemId():number {
        return this.itemId;
    }

    getQuantity():number {
        return this.quantity;
    }

}