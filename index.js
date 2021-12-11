// YOUR CODE HERE
class Car {
    constructor(make, model, year) {
        this.make = 'Jeep';
        this.model = 'Commander';
        this.year = 2006;
        this.honk();
        this.performMaintenance()
    }
}

const mySweetRide = new Car(
    make, 'Pontiac',
    model, 'Fiero',
    year, 1988
)