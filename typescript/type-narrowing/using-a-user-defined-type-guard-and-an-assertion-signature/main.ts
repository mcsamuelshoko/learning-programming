//* Using a user-defined type guard with an assertion signature

/**
 * In this lesson, we will learn what assertion signatures are 
 * and how we can use them in a user-defined type guard function. 
 * 
 */


//* Understanding an assertion signature

/**
 * An assertion signature can be used in a function's return type 
 * to indicate the narrowed type of the parameter:  
 */

//* function assertTypeName(
//*   paramName: WideTypeName
//* ): asserts paramName is NarrowTypeName {
//*   if (some_check) {
//*     throw new Error("Assert failed");
//*   }
//* }

/**
 * asserts paramName is NarrowTypeName is the assertion signature in 
 * the above function.
 * 
 * The type guard function carries out some checks on its parameter 
 * and throws an error if it isn't the type being asserted. 
 * If no errors are raised, then TypeScript will narrow the type 
 * to the one being asserted
 *  
 */

// An example

interface Person {
  firstName: string;
  surname: string;
}
interface Organisation {
  name: string;
}
type Contact = Person | Organisation;

function assertIsPerson(contact: Contact): asserts contact is Person {
  if ((contact as Person).firstName === undefined) {
    throw new Error('Not a person');
  }
}

function assertIsOrganisation(contact: Contact): asserts contact is Organisation {
  if ((contact as Organisation).name === undefined) {
    throw new Error('not an organisation.');
  }
}

function sayHello(contact: Contact) {
  // // TODO - Output Hello {firstName} if a person
  // assertIsPerson(contact);
  // console.log('Hello ' + contact.firstName);
  // TODO - Output Hello {name} if an organisation
  assertIsOrganisation(contact);
  console.log('hello ' + contact.name)
}
const bob: Person = {
  firstName: "Bob",
  surname: "Young",
};
const redBricks: Organisation = {
  name: "Red Bricks",
};
sayHello(bob);
sayHello(redBricks);

/***
 * Nice!
 * 
 * Summary
 * A user-defined type guard can carry out checks on its parameter 
 * and use an assertion signature to tell TypeScript what type it is. 
 * A user-defined type guard that uses an assertion signature throws 
 * an error if the checks fail.
 * 
 * In the next lesson, we will learn about the discriminated union pattern.
 * 
 */