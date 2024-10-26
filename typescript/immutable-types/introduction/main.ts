// Introduction

function doubleScores(scores: number[]){
  scores.forEach(
    (score, i)=>(scores[i] = score * 2)
  );
  return scores;
}

const scores = [90, 65, 80];
const scoreDoubled = doubleScores(scores);

// ! scores has been unexpectedly changed
// ! oof
console.log( 'scores: ',scores);