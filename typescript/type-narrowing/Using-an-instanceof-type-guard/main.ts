/**
 * Using an `instanceof` type guard
 * 
 * In this lesson, we will learn about the instanceof operator 
 * and how it can be used to narrow the type of class objects.
 *  
 */

//* Understanding the instanceof operator
/**
 * instanceof is a JavaScript operator that can 
 * check whether an object belongs to a particular class. 
 * It also takes inheritance into account.
 * 
 * The Syntax is:
 */

//*  ObjectVariable instanceof ClassName;

/**
 * The expression returns true or false 
 * depending on whether the object belongs to the class or not.
 */

//* An example

class Contact {
  constructor(public emailAddress: string) { }
}
class Person extends Contact {
  constructor(
    public firstName: string,
    public surname: string,
    emailAddress: string
  ) {
    super(emailAddress);
  }
}
class Organisation extends Contact {
  constructor(public name: string, emailAddress: string) {
    super(emailAddress);
  }
}

function sayHello(contact: Contact) {
  // TODO - Output Hello {firstName} if a person
  if (contact instanceof Person) {
    console.log(`Helllo ${contact.firstName}`);
  }
  // TODO - Output Hello {name} if an organisation
  if (contact instanceof Organisation) {
    console.log('Hello ' + contact.name);
  }
}

const bob = new Person("Bob", "Young", "bob.young@somewhere.com");
const redBricks = new Organisation(
  "Red Bricks",
  "info.redbricks@somewhere.com"
);

sayHello(bob);
sayHello(redBricks);

/**
 * Summary
 * The instanceof operator can be used to help TypeScript 
 * narrow the type of a class object variable. 
 * It only works on class structures and 
 * not other TypeScript structures, such as interfaces.
 */
