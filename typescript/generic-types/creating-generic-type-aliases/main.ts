// Generic type alias syntax

type typeName<T1, T2> = {
  //...
}

// Generic type alias example

// TODO - create the Form generic type

type Form<T> = {
  errors: {
    [K in keyof T]?: string;
  },
  values: T
}

interface Contact {
  name: string;
  email: string;
}

const contactForm: Form<Contact> = {
  errors: {
    email: "This must be a valid email address"
  },
  values: {
    name: "Bob",
    email: "bob@someemail.com"
  }
};

console.log(contactForm);
