// !  Understanding the discriminated union pattern

/**
 * In this lesson, we will learn what the discriminated 
* union pattern is and how we can use it to narrow the type of a variable.

//* Understanding the discriminated union pattern
 * The discriminated union pattern has three key parts:

 *! 1.
 * The first part of the pattern is to have a common singleton type property. 
 * A singleton type is one that contains only a single value. 
 * An example of a singleton type is a string literal. 
 * This part of the pattern is called the discriminant:
 * 
 */

/*
  type Type1 = {
  ...
  commonName: "value1"
  }
  type Type2 = {
  ...
  commonName: "value1"
  }
  ...
  type TypeN = {
  ...
  commonName: "valueN"
  }

*/

/**
 * ! 2.
 * The second part of the pattern is to have a union type of 
 * all the singleton types used. This part of the pattern is called the union:
 * 
 * 
    type UnionType = Type1 | Type2 | ... | TypeN

 *     
 *  
    function (param: UnionType) {
    switch (param.commonName) {
      case "value1":
        // type narrowed to Type1
        break;
      case "value2":
        // type narrowed to Type2
        break;
      ...
      case "valueN":
        // type narrowed to TypeN
        break;
    }
  } 

  *
  *! 3.
  * 
  * The final part of the pattern is to have type guards on the 
  * common property which narrows the union type:
  * 
    
  function (param: UnionType) {
    switch (param.commonName) {
      case "value1":
        // type narrowed to Type1
        break;
      case "value2":
        // type narrowed to Type2
        break;
      ...
      case "valueN":
        // type narrowed to TypeN
        break;
    }
  }

 */

//* An example

interface Person {
  firstName: string;
  surname: string;
  contactType: "person";
}
interface Organisation {
  name: string;
  contactType: "organisation";
}
type Contact = Person | Organisation;

function sayHello(contact: Contact) {
  // TODO - Output Hello {firstName} if a person
  switch (contact.contactType) {
    case 'person':
      console.log('hello ' + contact.firstName);
      break;
    case 'organisation':
      console.log('hello ' + contact.name);
      break;
  }
  // TODO - Output Hello {name} if an organisation
}

const bob: Person = {
  firstName: "Bob",
  surname: "Young",
  contactType: "person"
};

const redBricks: Organisation = {
  name: "Red Bricks",
  contactType: "organisation"
};

sayHello(bob);
sayHello(redBricks);

/**
 * 
 * Nice!
 *
 * Summary
 * The discriminated union pattern is a way of narrowing a union type. 
 * A requirement for this pattern is for the types in the union to have 
 * a common property. Conditional statements can then be used on the 
 * common property as a type guard to narrow the union type.
 * 
 * Good stuff!
 * 
 */