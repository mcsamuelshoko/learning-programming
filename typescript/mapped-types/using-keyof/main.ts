//* Understanding the keyof operator

/**
* The syntax for using a keyof operator in a type annotation is as follows:

** let keys: keyof ExistingType;

* The keyof operator is sometimes referred to as 
* the index query operator because it queries 
* the type specified after it. 
* When TypeScript sees the keyof operator in a 
* type annotation, it queries the type after it 
* and extracts all its keys. It then constructs 
* a union string literal type from the keys.
*/

// An example

type ContactDetails = { name: string; email: string };
