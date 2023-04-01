// Abstract product interface
interface CarComponent {
  getInfo(): string;
}

// Concrete products
class SedanEngine implements CarComponent {
  getInfo() {
    return "4-cylinder engine for Sedan";
  }
}

class SuvEngine implements CarComponent {
  getInfo() {
    return "6-cylinder engine for SUV";
  }
}

class SedanSeats implements CarComponent {
  getInfo() {
    return "4 seats for Sedan";
  }
}

class SuvSeats implements CarComponent {
  getInfo() {
    return "7 seats for SUV";
  }
}

class SedanWheels implements CarComponent {
  getInfo() {
    return "16-inch wheels for Sedan";
  }
}

class SuvWheels implements CarComponent {
  getInfo() {
    return "18-inch wheels for SUV";
  }
}

// Abstract factory interface
interface CarFactory {
  createEngine(): CarComponent;
  createSeats(): CarComponent;
  createWheels(): CarComponent;
}

// Concrete factories
class SedanCarFactory implements CarFactory {
  createEngine() {
    return new SedanEngine();
  }
  createSeats() {
    return new SedanSeats();
  }
  createWheels() {
    return new SedanWheels();
  }
}

class SuvCarFactory implements CarFactory {
  createEngine() {
    return new SuvEngine();
  }
  createSeats() {
    return new SuvSeats();
  }
  createWheels() {
    return new SuvWheels();
  }
}

// Client code
class Car {
  engine: CarComponent;
  seats: CarComponent;
  wheels: CarComponent;

  constructor(factory: CarFactory) {
    this.engine = factory.createEngine();
    this.seats = factory.createSeats();
    this.wheels = factory.createWheels();
  }

  getInfo() {
    return `${this.engine.getInfo()}, ${this.seats.getInfo()}, ${this.wheels.getInfo()}`;
  }
}

// Usage
const sedan = new Car(new SedanCarFactory());
console.log("Sedan: " + sedan.getInfo());

const suv = new Car(new SuvCarFactory());
console.log("SUV: " + suv.getInfo());
