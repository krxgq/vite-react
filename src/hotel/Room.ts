export class Room {
    num: number;
    available: boolean = true;
    pricePerNight: number = 100;

    constructor(num: number) {
        this.num = num;
    }
}
