var dolphinsScores = [96, 108, 89];
var koalasScores = [88, 91, 110];

// 1. Calculate the average score for each team
var cb = (a, b) => {
  return a + b;
}

var average = (scores) => {
  return (
    scores.reduce(cb, 0) / scores.length
  )
}
calculateAverage = (scores) => {
  return scores.reduce((total, score) => total + score, 0) / scores.length;
};
var averageDolphins = average(dolphinsScores);
var averageKoalas = average(koalasScores);
console.log(`Dolphins average score: ${averageDolphins}`);
console.log(`Koalas average score: ${averageKoalas}`);
// 2. Compare the team's average scores to determine the winner of the competition
var result = averageDolphins > averageKoalas
  ? "Dolphins win!"
  : averageKoalas > averageDolphins
  ? "Koalas win!"
  : "Hòa!";

console.log(result)
// 3. Bonus 1: Include a requirement for a minimum score of 100
const minScore = 100;


var result =
  averageDolphins >= minScore && averageDolphins > averageKoalas
    ? "Dolphins win !"
    : averageKoalas >= minScore && averageKoalas > averageDolphins
    ? "Koalas win !"
    : averageDolphins >= minScore &&
      averageKoalas >= minScore &&
      averageDolphins === averageKoalas
    ? "Hòa"
    : "Không có đội nào win vì cả 2 đều k đạt điểm tối thiểu";

console.log(result);
// 4. Bonus 2: Minimum score also applies to a draw

