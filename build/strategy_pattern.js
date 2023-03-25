"use strict";
// display
class NormalDisplay {
    display() {
        console.log("Normal Fly");
    }
}
class NormalFly {
    fly() {
        console.log("Normal Fly");
    }
}
class ShortFly {
    fly() {
        console.log("Short Fly");
    }
}
class LongFly {
    fly() {
        console.log("Long Fly");
    }
}
class NoFly {
    fly() {
        console.log("Doesn't Fly");
    }
}
// Duck
class Duck {
    constructor(display, fly) {
        this.displayBehaviour = display;
        this.flyBehaviour = fly;
    }
    display() {
        this.displayBehaviour.display();
    }
    fly() {
        this.flyBehaviour.fly();
    }
}
// instead of creating sub classes we can create the duck object with any configuration arrangement that we need
// The benefit is that now we can reuse the fly and display behaviours any where that we need
let cityDuck = new Duck(new NormalDisplay(), new LongFly());
let rubberDuck = new Duck(new NormalDisplay(), new NoFly());
let wildDuck = new Duck(new NormalDisplay(), new LongFly());
cityDuck.fly();
cityDuck.display();
rubberDuck.fly();
wildDuck.fly();
