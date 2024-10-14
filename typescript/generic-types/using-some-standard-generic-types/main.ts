// Understanding the generic type syntax
type Coordinate = [number, number];


// Array<T>
let coordinates: Array<Coordinate>;
coordinates = [
  [11, 45],
  [33, 86]
];

// Promise<T>
const promisedResponse: Promise<Response> = fetch("https://swapi.dev/api/");
promisedResponse.then((res) => console.log(res.ok));

// Record<K,V>

type Result = {
  firstName: string;
  surname: string;
  score: number;

};

type ResultRecord = Record<'alexm' | 'elig' | 'jamh', Result>;

const results: ResultRecord = {
  'alexm': {
    firstName: 'alex',
    surname: 'mercer',
    score: 80
  },
  'elig': {
    firstName: 'elizabeth',
    surname: 'greene',
    score: 90
  },
  'jamh': {
    firstName: 'james',
    surname: 'heller',
    score: 75
  },
  'revb': {
    firstName: 'reverend',
    surname: 'bob',
    score: 60
  }
}

console.log(results);