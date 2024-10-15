import { Room } from './Room';
import { Guest } from './Guest';
import { Reservation } from './Reservation';
import { EconomyRoom } from './EconomyRoom';
import { Suite } from './Suite';

export class Hotel {
    rooms: Room[] = [];

    constructor() {}

    addRoom(room: Room): void {
        this.rooms.push(room);
    }

    listAvailableRooms(): Room[] {
        return this.rooms.filter((room) => room.available);
    }

    cancelReservation(guest: Guest, num: number): void {
        let reservation: Reservation | undefined;
        for (const res of guest.reservedRooms) {
            if (res.room.num === num) {
                reservation = res;
                break;
            }
        }

        if (!reservation) {
            throw new Error('Reservation not found');
        }
        
        reservation.room.available = true; // Mark the room as available
        guest.reservedRooms = guest.reservedRooms.filter(
            (res) => res.room.num !== num
        ); // Remove the reservation from the guest
    }

    getRoomCategory(room: Room): string {
        if (room instanceof Suite) {
            return 'Suite';
        } else if (room instanceof EconomyRoom) {
            return 'Economy';
        } else {
            return 'Regular';
        }
    }

    makeReservation(room: Room, guest: Guest): void {
        const reservation = new Reservation(this, room.num);
        reservation.reserve();
        console.log(`Room ${room.num} has been reserved for ${guest.name}`);
    }
}
