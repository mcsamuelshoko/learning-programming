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


const initialContactDetails = { name: "", email: "", mobile: "" };

function saveContactDetails(details: typeof initialContactDetails) {
  console.log(details);
}

/**
* Summary
* 
* The typeof type annotation can be used to extract the type 
* from an object. This approach reduces the types we need 
* to create, making our code more maintainable.
*  
*/