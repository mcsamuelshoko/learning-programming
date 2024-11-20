/**
 ** Understanding the infer keyword
 *
 * There is an infer keyword that can be used within a 
 * condition in a conditional type to put the inferred 
 * type into a variable. That inferred variable can 
 * then be used within the conditional branches.
 *
 * Consider the simple example below which gives the 
 * array element type if the type is an array:
 * 
      type ArrayElementType<T> = T extends (infer E)[] ? E : T;
      
      // type of item1 is `number`
      type item1 = ArrayElementType<number[]>;
      
      // type of item1 is `{name: string}`
      type item2 = ArrayElementType<{ name: string }>;

 * When item1 is constructed, the condition in the 
 * conditional type is true because number[] matches 
 * (infer E)[]. E is therefore inferred to be number 
 * during this matching process. The first branch of the 
 * condition, E, is returned, which is resolved to be number.
 * 
 * When item2 is constructed, the condition in the 
 * conditional type is false because {name: string} 
 * does not match (infer E)[]. Therefore the second 
 * branch of the condition, T, is returned, which is the 
 * original parameter passed in, {name: string}.
 */

//* An Example

type FunctionReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : T;


function addPerson(personName: string) {
  return {
    type: "AddPerson",
    payload: personName
  };
}

function removePerson(id: number) {
  return {
    type: "RemovePerson",
    payload: id
  };
}

type AddPersonType = typeof addPerson;
type RemovePersonType = typeof removePerson;

type Actions =
  | FunctionReturnType<AddPersonType>
  | FunctionReturnType<RemovePersonType>;

const person = { name: "Fred" }
// type PersonType = FunctionReturnType<typeof person>


type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => R ? R : any;

/**
 *! Summary
 * ********
 * 
 * The infer keyword allows types to be extracted from conditions 
 * in conditional types. This is often used within Typescript's 
 * standard utility types.
 * 
 * In the next lesson, we will gain a deep understanding of some 
 * of TypeScripts standard conditional utility types.
 */