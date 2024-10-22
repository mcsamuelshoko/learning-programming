// Introduction

/**
 * In a TypeScript program, a variable can move from a less precise type 
 * to a more precise type. This process is called type narrowing. 
 */

type Animal = {
  name: string;
  legs?: number;
}

function addLeg(animal: Animal) {
  //* animal.legs = animal.legs + 1; // 💥 - Object is possibly 'undefined'
}

/**
 * TypeScript raises a type error because the legs property could be undefined, 
 * and it doesn't make sense to add 1 to undefined.
 * To resolve this type error, we need to narrow 
 * the type of the legs property to number. i.e. 
 * we need to remove undefined from its type.
 * 
 * In this module we will learn different ways 
 * in which we can narrow types to prevent type errors. 
 * 
 * [We will cover:]
 * Using type assertions
 * Using the non-null assertion operator
 * Using a typeof type guard
 * Using an instanceof type guard
 * Using an in type guard
 * Using a user-defined type guard with a type predicate
 * Using a user-defined type guard with an assertion signature
 * Understanding the discriminated union pattern
 * Quiz
 */