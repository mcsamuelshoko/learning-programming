// Understanding the readonly modifier on reference types

/**
 * The readonly modifier can be placed before a property that is a reference type (i.e. an object or an array) as follows:

    type TypeName = {
      readonly propertyName1: ObjectType;
      readonly propertyName2: ArrayType;
    };

 * This can also be used in interfaces and classes:

    interface InterfaceName {
      readonly propertyName1: ObjectType;
      readonly propertyName2: ArrayType;
    }
    class ClassName {
      constructor(
        public readonly propertyName1: ObjectType,
        public readonly propertyName2: ArrayType
      ) {}
    }

 * This will stop the property's reference from changing so 
 * that it can't be changed to another object or array. 
 * It, however, doesn't stop values within the property 
 * from changing.
 * 
 * We can put an additional readonly modifier before array 
 * type to prevent the array items from changing for array 
 * types.

    readonly propertyName: readonly ArrayType;

 * For object types, we need to put an additional readonly 
 * modifier before properties within the object to prevent 
 * them from changing.

    type TypeName = {
      readonly propertyName: {
        readonly subPropertyName: PropertyType;
      };
    };

 * 
 */

//* An example

interface Result {
  name: string;
  readonly scores: number[];
  readonly profile: {
    level: number;
  };
}
let billScores: Result = {
  name: "Bill",
  scores: [90, 65, 80],
  profile: {
    level: 1,
  },
};

console.log(billScores);