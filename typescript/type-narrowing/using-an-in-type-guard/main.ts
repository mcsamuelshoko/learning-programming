/**
 * Using an `in` type guard
 * In this lesson, we will learn about the in operator 
 * and how it can narrow the type of object structures.
*/

/*
* Understanding the in operator
  in is a JavaScript operator that can be used 
  to check whether a property belongs to a particular object.

The syntax is:
 * 
 */

//* propertyName in objectVariable;

/**
 * The expression returns true or false depending on 
 * whether the property belongs to the object. 
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
  surname: "Young"
};

const redBricks: Organisation = {
  name: "Red Bricks"
};

sayHello(bob);
sayHello(redBricks);

