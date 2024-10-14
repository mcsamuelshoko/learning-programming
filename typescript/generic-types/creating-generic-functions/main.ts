// A non-generic function

function _firstOrNull(array: string[]): string | null {
  return array.length === 0 ? null : array[0];
}

// Generic function syntax
function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}

console.log(firstOrNull<string>(['ball', 'apple', 'can']));
console.log(firstOrNull<number>([3, 43, 643]));

// Type inference on generic functions
const first = firstOrNull([14, 56, 75]);
console.log(first);