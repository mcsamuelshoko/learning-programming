/**
 * A type guard is a mechanism of narrowing a type. 
 * There are several types of type guards in TypeScript, 
 * and we will learn about the typeof method in this lesson.
 * 
 */

// Understanding the `typeof` type guard

function double(item: string | number) {
  // TODO:
  // return `item.concat(item)` if item is a string
  if (typeof item === 'string') {
    return item.concat(item);
  }
  // return `item + item` if item is a number
  else {
    return item + item;
  }
}

console.log(double("hello"));
console.log(double(1));


