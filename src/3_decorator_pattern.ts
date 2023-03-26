/**
 * decorator pattern attaches different responsibility to an object in runtime.
 */
abstract class Beverage {
  abstract cost(): number;
}

abstract class AddonDecorator extends Beverage {
  abstract cost(): number;
}

class Espresso extends Beverage {
  cost(): number {
    return 1;
  }
}

class CaramelDecorator extends AddonDecorator {
  beverage: Beverage;
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  cost(): number {
    return this.beverage.cost() + 2;
  }
}

class ChololateDecorator extends AddonDecorator {
  beverage: Beverage;
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  cost(): number {
    return this.beverage.cost() + 5;
  }
}

class WhippedCreateDecorator extends AddonDecorator {
  beverage: Beverage;
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  cost(): number {
    return this.beverage.cost() + 2;
  }
}

let espresso = new Espresso();

let caramelDecorator = new CaramelDecorator(espresso);
console.log("Whith Caramel ", caramelDecorator.cost());

let chocolateDecorator = new ChololateDecorator(caramelDecorator);
console.log("With Caramel + Chocolate ", chocolateDecorator.cost());

let whippedCream = new WhippedCreateDecorator(chocolateDecorator);
console.log("With Caramel, Chocolate and Whipped Cream ", whippedCream.cost());
