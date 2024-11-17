//* Understanding a mapped type modifier

/** [https://learntypescript.dev/08/l3-mapped-type-modifiers]
* 
* We used a mapped type modifier in the last lesson. 
* This was when we made the keys in the mapped type 
* optional by using a question mark (?) in front 
* of the key's type annotation:

    {
      [K in keyof T]?: TypeName
    }

* The question mark is called a modifier. Another modifier 
* is readonly:


    {
      readonly [K in keyof T]: TypeName
    }



* The readonly modifier makes a property in the mapped type 
* readonly. We will learn more about readonly properties later in this course.

* What if we have a type with optional keys and want to map 
* this to a type that has required keys? What if we have 
* a type with readonly properties and want to map it to 
* a type with writable properties? Well, we can use the - 
* symbol before the modifier to denote that the modifier 
* should be removed if it exists.

**Using the - symbol before a ? will map to a required key:

    {
      [K in keyof T]-?: TypeName
    }

* Using the - symbol before the readonly keyword will map 
* to a writable property:


    {
      -readonly [K in keyof T]: TypeName
    }

*/

//* An Example

type Contact = {
  name: string;
  email?: string;
};

const bob: Contact = {
  name: "Bob"
};

console.log(bob);
