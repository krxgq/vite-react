import { Observer } from "./Observer";

export class ChatRoom  {
    private observers: Observer[] = [];
    public addUser(user: Observer): void {
        this.observers.push(user);
    }
    public removeUser(user: Observer): void {
        this.observers = this.observers.filter((observer) => observer !== user);
    }
    public sendMessage(message: string): void {
        this.observers.forEach((observer) => observer.receiveMessage(message));
    }
}