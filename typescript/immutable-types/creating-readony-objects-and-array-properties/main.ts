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

billScores.scores.push(70)

/**
 * ! 🤔 Why isn't a type error raised on this line of code? 
 * ? How can we ensure a type error is raised?

 * Putting the readonly keyword before an array property 
 * name only ensures its reference won't change. 
 * We can mutate the array, but we can't set it to a 
 * different array. We can put an additional readonly 
 * modifier before the array type to ensure the 
 * array items aren't changed:

    readonly scores: readonly number[];

 * 
 */

billScores.profile.level = 3;
/**
 * ! 🤔 Why isn't a type error raised on this line of code? 
 * ? How can we ensure a type error is raised?

 * Putting the readonly keyword before an object property 
 * name only ensures its reference won't change. We can 
 * mutate the profile object, but we can't set it to 
 * a different object. We need to put a readonly modifier 
 * before the level property to ensure it isn't changed:

    readonly profile: {
      readonly level: number;
    };
 * 
 */

console.log(billScores);

// Using the Readonly utility type

/**
 * There is a handy utility type called Readonly that 
 * automatically adds the readonly modifier to all the 
 * properties in an object type:

    type ReadonlyType = Readonly<ExistingType>;

 * 
 */

    
interface Result2 {
  name: string;
  scores: number[];
  profile: {
    level: number;
  }
}

let billScores2: Readonly<Result> = {
  name: "Bill",
  scores: [90, 65, 80],
  profile: {
    level: 1,
  },
};

billScores2.scores.push(70);
billScores2.profile.level = 4;
billScores2.name = "Bob";

console.log(billScores2);

/**
 * Summary
 * Care needs to be taken when adding the readonly 
 * modifier to object and array properties. If the 
 * requirement is to make an array property value 
 * immutable, an additional readonly modifier needs to be 
 * added before the array type. If the requirement is to 
 * make an object property value deep immutable, 
 * additional readonly modifiers need to be added to all 
 * the nested properties.

 * Care also needs to be taken when using the Readonly 
 * utility type. It is perfect for shallow object 
 * immutability but doesn't make an array or nested object 
 * properties immutable.
 * 
 */