/**
 The abstract factory pattern is useful when we want to create families of related objects without specifying their concrete classes. 
 
 It allows us to decouple the client code from the concrete classes and makes it easier to switch between different implementations of the same family of objects.
 */

// Abstract product interface
interface Product {
  name: string;
  getPrice(): number;
}

// Concrete products
class ConcreteProductA implements Product {
  name = "Product A";
  getPrice() {
    return 10;
  }
}

class ConcreteProductB implements Product {
  name = "Product B";
  getPrice() {
    return 20;
  }
}

// Abstract factory interface
interface Factory {
  createProduct(): Product;
}

// Concrete factories
class ConcreteFactoryA implements Factory {
  createProduct() {
    return new ConcreteProductA();
  }
}

class ConcreteFactoryB implements Factory {
  createProduct() {
    return new ConcreteProductB();
  }
}

// Client code
function client(factory: Factory) {
  const product = factory.createProduct();
  console.log(product.name, product.getPrice());
}

// Usage
client(new ConcreteFactoryA()); // Output: Product A 10
client(new ConcreteFactoryB()); // Output: Product B 20
