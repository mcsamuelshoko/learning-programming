//* `readonly` modifier syntax
/**
 * A property can be readonly by putting a readonly keyword 
 * before the property name:
 * 
    type TypeName = {
      readonly propertyName: PropertyType;
    };

 * This can be applied to interface and class properties 
 * as well as type alias properties.

    interface InterfaceName {
      readonly propertyName: PropertyType;
    }
    class ClassName {
      constructor(public readonly propertyName: PropertyType) {}
    }

 */

// An example
type Person = {
  name: string;
  readonly age: number;
};

const bob: Person = {
  name: "Bob",
  age: 30
};

bob.age = 31

interface Animal {
  name: string;
  readonly age: number;
};

const barry: Animal = {
  name: "Barry",
  age: 4
};

barry.age = 5

class Vehicle {
  constructor(name: string, readonly topSpeed: number) {
  }
}
const mini = new Vehicle("Mini", 120);
mini.topSpeed = 125;

console.log(bob.age, barry.age, mini.topSpeed)

/**
 * Summary
 * 
 * The readonly modifier allows immutable primitive 
 * properties to be created. However, this is only 
 * compile-time immutability and not runtime immutability.
 * 
 */