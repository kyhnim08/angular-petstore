export class Account {
    email?: string | null;
    password?: string;
    name?: string;
    country?: string;
    city?: string;
    address?: string;
    zip?: string;    
    photoURL?: string;
    uid?: string;

    constructor() {
        this.email = null;
        this.password = '';
        this.name = '';
        this.country = '';
        this.city = '';
        this.address = '';
        this.zip = '';   
        this.photoURL = '';
        this.uid = '';
    }
}
