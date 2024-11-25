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
  age: number;
};
const bob: Person = {
  name: "Bob",
  age: 30
};
