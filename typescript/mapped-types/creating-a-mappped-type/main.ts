//* Understanding a mapped type
/**
* A mapped type is the process of creating a new type 
* by mapping type information from an existing type.

** type MappedTypeName = {[K in UnionType]: ExistingType}


* This becomes more useful when used with the keyof 
* operator we learned about in the last lesson:

      type MappedTypeName = {
        [K in keyof ExistingType1]: ExistingType2;
      };
* This creates a new type containing the keys from 
* another type.
*/

//* An example

interface Form<T> {
  values: T;
  errors: {[K in keyof T]?:string};
}

const contactForm: Form<{ name: string; email: string, mobile: string }> = {
  values: {
    name: "Bob",
    email: "bob@someemail.com",
    mobile: "0793 869487368"
  },
  errors: {
    email: "Invalid email address",
    mobile:"You must add a mobile number"
  }
};
console.log(contactForm);

/**
 ** Summary
 *
 * Mapped types allow us to create new types based on an 
 * existing type. They are useful for handling generic 
 * data in a strongly-typed manner. 
 */