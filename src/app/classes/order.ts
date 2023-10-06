import { Account } from './account';
import { Item } from './item';

export class Order {
    orderdate: number;
    totalprice: number;
    orderstatus: string;
    account: Account;
    orderItems: Item[];
    token?: any;

    constructor(){
        this.orderdate = 0;
        this.totalprice = 0;
        this.orderstatus ='';
        this.account  = {
            email : null,
            password : '',
            name : '',
            country : '',
            city : '',
            address : '',
            zip : '',   
            photoURL : '',
            uid : '',
        };
        this.orderItems = [{
            catid : '',
            catname : '',
            productid : '',
            itemid : '',
            name : '',
            icon : '',
            descn : '',
            attr1 : '',
            listprice : 0,
            quantity : 0,
            bookmarked : false,
            getItemprice : function(){}
            }
        ];
        this.token = null;
    }
}