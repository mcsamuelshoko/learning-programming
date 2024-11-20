//* Understanding conditional types

/**
* Types that we create can have conditional logic, 
* just like regular JavaScript code.
* 
** T1 extends T2 ? A : B
* 
* The conditional type syntax uses the ternary 
* operator that we are familiar with from JavaScript code.
* 
* The extends keyword is used to define the condition. 
* If T2 is within T1 then type A is used; otherwise, type B is used.
* 
* Conditional types aren't very useful on their own but are 
* extremely useful in generic types. A common use case is 
* to use a conditional type with the never type to prune 
* values from a type.
*/

//* An example

type NullableString = string | null;
type RemoveNull<T> = T extends null ? never : T;


let firstName: RemoveNull<NullableString>;
// firstName = null;
firstName = "Bob";

console.log(firstName);
{
    let firstName: NonNullable<NullableString>;
    // firstName = null;
    firstName = "Bob";
    console.log('non-nullable: ', firstName);
}


/**
 * Summary
 * With the help of generics and the never type, conditional 
 * types allow utility types to be created that remove 
 * possible values from a type. This approach is heavily 
 * used within Typescript's standard utility types.
 */