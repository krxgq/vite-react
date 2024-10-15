import { Room } from './Room';
import { Hotel } from './Hotel';

export class Reservation {
    room: Room;
    hotel: Hotel;

    constructor(hotel: Hotel, num: number) {
        this.hotel = hotel;

        // Use a for loop to get the room
        let foundRoom: Room | undefined;
        for (const room of this.hotel.rooms) {
            if (room.num === num) {
                foundRoom = room;
                break;
            }
        }

        // Check if the room is found
        if (!foundRoom) {
            throw new Error('Room with that number not found');
        }

        this.room = foundRoom; // Assign the found room to this.room
    }

    reserve(): void {
        if (!this.room.available) {
            throw new Error('Room is already reserved');
        }
        this.room.available = false; // Mark the room as reserved
    }
}
