//* Creating readonly array parameters

function doubleScores(scores: number[]) {
  scores.forEach((score, i) => (scores[i] = score * 2));
  return scores;
}

const billScores = [90, 65, 80];