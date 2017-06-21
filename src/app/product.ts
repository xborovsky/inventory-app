export class Product {
    private id:number;
    private name:string;
    private price:number;
    private iconSrc:string;
    private sku:string;
    private section:string[];

    constructor() {}

    public getId():number {
        return this.id;
    }

    public setId(id:number):void {
        this.id = id;
    }

    public getName():string {
        return this.name;
    }

    public setName(name:string):void {
        this.name = name;
    }

    public getPrice():number {
        return this.price;
    }

    public setPrice(price:number):void {
        this.price = price;
    }

    public getIconSrc():string {
        return this.iconSrc;
    }

    public setIconSrc(iconSrc:string):void {
        this.iconSrc = iconSrc;
    }

    public getSku():string {
        return this.sku;
    }

    public setSku(sku:string):void {
        this.sku = sku;
    }

    public getSection():string[] {
        return this.section;
    }

    public setSection(section:string[]) {
        this.section = section;
    }

    public getFullPathFromSections(currentSection:string):string {
        var ret = '/products';

        for (var i=0; i<this.section.length; i++) {
            ret += '/' + this.section[i].toLowerCase().replace(/ +/g, '_').replace('&', '_').replace(/_+/g, '_'); // todo better? duplicate!
            if (this.section[i] === currentSection) {
                break;
            }
        }

        return ret;
    }
}
