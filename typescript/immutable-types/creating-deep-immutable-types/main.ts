//* Using const assertions

//? A const assertion is a kind of type assertion where the 
//? keyword const is used in place of the type:
//
//    let variableName = someValue as const;
//

const bill = {
  name: "Bill",
  profile: {
    level: 1,
  },
  scores: [90, 65, 80],
} as const;

bill.name = "Bob";
bill.profile.level = 2;
bill.scores.push(100);

//* Creating a deepfreeze function
/**
 * The const assertion gives us deep immutability at 
 * compile time. We can achieve runtime deep immutability 
 * by creating and using a `deepFreeze` function based on 
 * the `Object.freeze` JavaScript method.
 * 
 */

console.log(bill)

function deepFreeze<T>(obj: T){
  let propNames = Object.getOwnPropertyNames(obj)
  for (let name of propNames){
    let value = (obj as any)[name];
    if(value && typeof value === "object"){
      deepFreeze(value);
    }
  }
  return Object.freeze(obj); 
}

const labulu = deepFreeze({
  name: "Bill",
  profile: {
    level: 1,
  },
  scores: [90, 65, 80],
} as const);

//!error -> immutable types
// labulu.name = "Bob";
// labulu.profile.level = 2;
// labulu.scores.push(100);

//* Creating a 'DeepImmutable' type
