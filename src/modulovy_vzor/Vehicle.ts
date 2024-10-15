export class Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    clone(): Vehicle {
        return new Vehicle(this.make, this.model, this.year);
    }
}