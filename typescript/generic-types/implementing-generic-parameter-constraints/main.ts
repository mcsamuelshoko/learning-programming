// Parameter constraint syntax

/**
 * The syntax for a parameter constraint is to put the type that 
 * the parameter must be compatible with after the extends keyword:
 * 
 *  <T extends ContrainingType>
 * 
 */

// A simple example

interface Logable {
  log: () => void;
}

function logItems<T extends Logable>(items: T[]): void {
  items.forEach(item => item.log());
}

const heading = {
  name: "Heading",
  props: {
    text: 'Chapter 1'
  },
  log: () => console.log('Chapter 1 Heading'),
};
const button = {
  name: "Button",
  props:{
    text: "Save",
  },
  log: () => console.log('Save button')
};

logItems([heading, button])

// A more complex example

interface Form<T>{
  values: T,
}

function getFieldValue<T, K extends keyof T>(form: Form<T>, fieldName:K){
  return form.values[fieldName];
}


const contactForm = {
  values:{
    name:'Bob',
    email:"bob@someemail.com",
  },
};

console.log(getFieldValue(contactForm,"name"));
// console.log(getFieldValue(contactForm,"phone")); // 2nd parameter must be a key-name in first parameter


