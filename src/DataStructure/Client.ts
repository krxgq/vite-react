export class Client{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getName(): void{
        console.log(`My name is ${this.name}`)
    }
}