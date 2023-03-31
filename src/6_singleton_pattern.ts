class Singleton {
  private static instance: Singleton;
  public name: string = "Test";

  private constructor() {}

  public static getInstance(): Singleton {
    if (Singleton.instance == null) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

let singleton = Singleton.getInstance();
console.log("1: ", singleton.name); // Test
let singleton2 = Singleton.getInstance();
console.log("2: ", singleton2.name); // Test

let test = new Singleton();
console.log(test.name); // it still works becuase it is JS at the end
