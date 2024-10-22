// Using type assertions

/**
 * In a TypeScript program, a variable can move from 
 * a less precise type to a more precise type. 
 * This process is called type narrowing, 
 * and we'll learn all about this in this module. 
 * We'll start in this lesson by learning how to 
 * use type assertions to narrow the type of a variable.
 * 
 */

// Understanding the need for type assertions

const _button = document.querySelector(".go");

if (_button) {
  //* _button.disabled = true;
}

// Angle-bracket syntax

/*
 *  <TypeName> expression;
*/

const __button = <HTMLButtonElement>document.querySelector('go');

if (__button) {
  __button.disabled = true;
}

// “As” syntax

/**
 * The alternative and preferred syntax is to 
 * put the type after an as keyword after the expression:
 */

//* expression as TypeName;

const button = document.querySelector("go") as HTMLButtonElement;
if (button) {
  button.disabled = true;
}
