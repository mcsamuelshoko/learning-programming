// An example function that uses the spread operator

function _merge(names: string[], scores: number[]) {
  return [...names, ...scores];
}

let _scores = _merge(['Bill', 'Jane'], [8, 9])


// Spreading generic tuple parameters to narrow the return type

function __merge<Names extends string[], Scores extends number[]>(
  names: Names,
  scores: Scores
) {
  return [...names, ...scores];
}

function ___merge<Names extends string[], Scores extends number[]>(
  names: [...Names],
  scores: [...Scores]
) {
  return [...names, ...scores]
}

function merge<Names extends string[], Scores extends number[]>(
  names: [...Names],
  scores: [...Scores],
): [...Names, ...Scores] {
  return [...names, ...scores];
}

let scores = merge(["Bill", "Jane"], [8, 9]);