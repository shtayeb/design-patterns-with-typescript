class Adaptee {
  public specificRequest(): void {
    console.log("specific request of adaptee");
  }
}

interface ITarget {
  request(): void;
}

class Adapter implements ITarget {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): void {
    this.adaptee.specificRequest();
  }
}
// instead of Adaptee.specificRequest() we have called the request() of target class
let target = new Adapter(new Adaptee());
target.request();
