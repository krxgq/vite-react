import { Room } from "./Room";

export class EconomyRoom extends Room {
    pricePerNight: number = 50;

    constructor(num: number) {
        super(num);
    }
}
