// Creating a type for removing values from a union type
const person = {
  name: "Fred",
  age: 30,
  email: "fred@somewhere.com"
};

console.log(person);

type RemoveFromUnion<T, K> = T extends K ? never : T

type ContactKeys = RemoveFromUnion<keyof typeof person, "age">

// Creating a type that creates an object 
// with certain keys from another type

type ObjectWithKeys<T, K extends keyof T> = {
  [P in K]: T[P]
} 

type Contact = ObjectWithKeys<typeof person, "name" | "email">

// Creating a type that creates an object 
// without certain keys from another type

type ObjectWithoutKeys<T, K extends keyof T> = ObjectWithKeys<T,
RemoveFromUnion<keyof T, K>
>

type Profile = ObjectWithoutKeys<typeof person, "name" | "email">

/**
 * Summary
 * The combination of generics, mapped types, 
 * and conditional types allow powerful utility types 
 * to be created. A wide range of standard utility 
 * types already exist - it's well worth looking 
 * through these to understand the functionality 
 * they offer and understand how they are implemented.
 */