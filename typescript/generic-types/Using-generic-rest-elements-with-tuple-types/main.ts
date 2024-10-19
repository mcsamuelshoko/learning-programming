// Understanding rest element types

type Scores = [string, ...number[]];


// Using generic rest element types

type nameAndThings<T extends unknown[]> = [name: string, ...things: T];

let bobScores: nameAndThings<number[]>;

bobScores = ["Bob", 4, 9, 3];


let billGrades: nameAndThings<('A' | 'B' | 'C')[]>;

billGrades = ["Bill", 'A', 'A', "C"];


// Using generic rest element types in functions

function logThings<T extends unknown[]>(name: string, ...things: T) {
  console.log(things);
}

logThings('bob', 1,4,6);

logThings('Bob',4, '9', 3);

// logThings<number[]>('Bob', 4, '9', 3); //* broken intentionally
