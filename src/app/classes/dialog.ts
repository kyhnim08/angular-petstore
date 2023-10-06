export class Dialog {
    title: string;
    message: string
    response?: string;
    constructor(title: string, message: string) {
        this.title = title;
        let parseMSS = JSON.parse(message);
        this.message = parseMSS.error.message;  
    }
}
