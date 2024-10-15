// Suite.ts
import { Room } from './Room';

export class Suite extends Room {
    pricePerNight: number = 200;
    miniBar: boolean = true; // Indicates if the suite has a minibar

    constructor(num: number, available: boolean = true) {
        super(num);
        this.available = available;
    }
}
