// display

interface IDisplayBehaviour {
  display(): void;
}

class NormalDisplay implements IDisplayBehaviour {
  display(): void {
    console.log("Normal Fly");
  }
}

// Fly

interface IFlyBehaviour {
  fly(): void;
}

class NormalFly implements IFlyBehaviour {
  fly(): void {
    console.log("Normal Fly");
  }
}

class ShortFly implements IFlyBehaviour {
  fly(): void {
    console.log("Short Fly");
  }
}

class LongFly implements IFlyBehaviour {
  fly(): void {
    console.log("Long Fly");
  }
}

class NoFly implements IFlyBehaviour {
  fly(): void {
    console.log("Doesn't Fly");
  }
}

// Duck

class Duck {
  public flyBehaviour: IFlyBehaviour;
  public displayBehaviour: IDisplayBehaviour;

  constructor(display: IDisplayBehaviour, fly: IFlyBehaviour) {
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
