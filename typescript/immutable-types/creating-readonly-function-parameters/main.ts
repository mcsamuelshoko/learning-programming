//* Creating readonly array parameters

function doubleScores(scores: readonly number[]) {
  return scores.map((score, i) => score * 2)
}

const billScores = [90, 65, 80];

const doubledScores = doubleScores(billScores)
console.log(billScores,doubledScores)

//* Creating readonly Object Parameters

type PersonScore = {
  name: string;
  score: number;
};

function doubleScore(person: Readonly<PersonScore>){
  return {...person, score: person.score * 2}
}

const bill: PersonScore = {
  name: "Bill",
  score:  90,
};

const doubleBill = doubleScore(bill)
console.log(bill,doubleBill)

/**
 *? Summary
 * 
 * Making function parameters immutable helps us write pure
 * functions and avoid subtle bugs.

 * Array function parameters can be made compile-time 
 * immutable by using the readonly modifier. Object 
 * parameters can be made shallow compile-time immutable 
 * by using the Readonly utility type.
 * 
 */