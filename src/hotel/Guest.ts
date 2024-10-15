import { Reservation } from './Reservation';
import { Hotel } from './Hotel';

export class Guest {
    name: string;
    public reservedRooms: Reservation[] = [];

    constructor(name: string) {
        this.name = name;
    }

    makeReservation(hotel: Hotel, num: number): void {
        const reservation = new Reservation(hotel, num);
        this.reservedRooms.push(reservation); // Store the reservation for this guest
        reservation.reserve(); // Call reserve to mark the room as reserved
    }
}
