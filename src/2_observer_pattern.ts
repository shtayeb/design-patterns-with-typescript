// Object-1 (Observable) - Changes state a lot
// Object-2 (Observer) - Wants to know when the state of the Object-1 has changed

/* 
    In the observer pattern the Object-1 is responsible to inform the Object-2 
    when its state changed.

    So the Object-1 has to know who is interested in its state change so that it
    could inform them.
*/

interface IObserver {
  name: string;
  update(): void;
}

interface IObservable {
  add(observer: IObserver): void;
  remove(observer: IObserver): void;
  notify(): void;
}

class WeatherStation implements IObservable {
  observers: IObserver[] = [];
  temparature: number = 25;

  add(observer: IObserver): void {
    this.observers.push(observer);
    console.log(observer.name + " observer added");
  }
  remove(observer: IObserver): void {
    this.observers.filter((obs) => obs !== observer);
    console.log(observer.name + " observer has been removed ");
  }

  notify(): void {
    this.observers.forEach((obs) => {
      obs.update();
    });
    console.log("notified observers");
  }

  getTemparature(): number {
    console.log("got the state");
    return this.temparature;
  }

  setTemparature(): void {
    this.temparature = Math.floor(Math.random() * 100);
    this.notify();
  }
}

class PhoneDisplay implements IObserver {
  name = "phone";
  weatherStation: WeatherStation;

  constructor(weatherStation: WeatherStation) {
    this.weatherStation = weatherStation;
  }

  update(): void {
    console.log(
      "Weather updated(Phone): Temp is " + this.weatherStation.getTemparature()
    );
  }
}

class LCDDisplay implements IObserver {
  name = "LCD";
  weatherStation: WeatherStation;

  constructor(weatherStation: WeatherStation) {
    this.weatherStation = weatherStation;
  }

  update(): void {
    console.log(
      "Weather updated(LCD): Temp is " + this.weatherStation.getTemparature()
    );
  }
}

let myStation = new WeatherStation();

let myPhoneDisplay = new PhoneDisplay(myStation);
let myLCDDisplay = new LCDDisplay(myStation);

myStation.add(myPhoneDisplay);
myStation.add(myLCDDisplay);

setInterval(function () {
  // This will be executed every 5 seconds
  myStation.setTemparature();
}, 5000);
