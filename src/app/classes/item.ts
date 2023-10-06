export class Item {
    public catid: string;
    public catname: string;
    public productid: string;
    public itemid: string;
    public name: string;
    public icon: string;
    public descn: string;
    public attr1: string;
    public listprice: number;
    public quantity: number;
    public bookmarked: boolean;

    getItemprice(): any {
        return this.listprice;
    }

    constructor(){
        this.catid = '';
        this.catname = '';
        this.productid = '';
        this.itemid = '';
        this.name = '';
        this.icon = '';
        this.descn = '';
        this.attr1 = '';
        this.listprice = 0;
        this.quantity = 0;
        this.bookmarked = false;
    }
}
