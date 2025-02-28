// Generic interface syntax

interface InterfaceName<T1, T2> {
  //...
}


// Generic interface example

interface Form<T> {
  errors: {
    [K in keyof T]?: string;
  };
  values: T;
}

interface Contact {
  name: string;
  email: string;
}

const contactForm: Form<Contact> = {
  errors: {
    email: "This must be a valid email address",
  },
  values: {
    name: "Bob",
    email: "bob@someemail.com",
  },
}
