/**
 * Using a user-defined type guard with a type predicate
 * 
 * In this lesson, we will learn about a way of narrowing 
 * a type with a custom function.

//* Understanding a type predicate
 * A type predicate can be used in a function's return 
 * type to indicate the narrowed type of the parameter: 
 */

/**
 * 
    function isTypeName(paramName: WideTypeName): paramName is NarrowTypeName {
    // some check
    return boolean_result_of_check;
    }
 * 
 *
 * paramName is NarrowTypeName is the type predicate in the above function.
 * A type guard function must return a boolean value if a type predicate is used.
 */

/**
 //* An example
 * 
 * We are going to explore a user-defined type guard 
 * with a type predicate in the code editor below:
 */

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
  surname: "Young"
};

const redBricks: Organisation = {
  name: "Red Bricks"
};

sayHello(bob);
sayHello(redBricks);