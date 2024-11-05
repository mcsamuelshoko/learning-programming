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

function isPerson(contact: Contact):contact is Person {
  return (contact as Person).firstName !== undefined;
}

function isOrganisation(contact: Contact):contact is Organisation{
  return (contact as Organisation).name !== undefined;
}

function sayHello(contact: Contact) {
  // TODO - Output Hello {firstName} if a person
  if(isPerson(contact)){
    console.log('hello person- ' + contact.firstName);
  }
  // TODO - Output Hello {name} if an organisation
  if(isOrganisation(contact)){
    console.log('hallo org- '+ contact.name)
  }
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

/**
 * Nice!
 * 
 * Summary
 * A user-defined type guard can carry out checks on its 
 * parameter and use a type predicate to tell TypeScript its type. 
 * A user-defined type guard that uses a type predicate must return a boolean value.
 * In the next lesson, we will learn another method of implementing a user-defined type guard.
 * 
 * 
 */