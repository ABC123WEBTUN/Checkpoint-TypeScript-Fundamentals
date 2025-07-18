"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Implement the Car class that implements Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
exports.Car = Car;
// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2023);
// Display car information
console.log(`Car Details: ${myCar.year} ${myCar.make} ${myCar.model}`);
// Call the start method
myCar.start();
