/**
 ** Understanding typeof in a type annotation

* The syntax for using a typeof operator in a type 
* annotation is as follows:


    let newObject: typeof existingObject;

* When TypeScript sees the typeof operator in a type 
* annotation, it queries the object after it and 
* extracts its type. So, in the example above, the 
* type of existingObject is given to the newObject variable.

* This syntax can be used on function parameters as well:

    function (param: typeof existingObject) { ... }

 * */

//* An example

type ContactDetails = {
  name: string;
  email: string;
};
const initialContactDetails: ContactDetails = { name: "", email: "" };

function saveContactDetails(details: ContactDetails) {
  console.log(details);
}
