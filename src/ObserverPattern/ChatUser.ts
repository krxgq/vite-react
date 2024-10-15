import { Observer } from "./Observer";

export class ChatUser implements Observer {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public receiveMessage(message: string): void {
        console.log(`${this.name} obdržel zprávu: ${message}`);
    }
}