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
function sayHello(contact: Contact) {
  // TODO - Output Hello {firstName} if a person
  // TODO - Output Hello {name} if an organisation
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