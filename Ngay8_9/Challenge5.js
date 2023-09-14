console.log("Challenge 5: ");
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
var DolphinsScore = calcAverage(44, 23, 71);
var koalasScore = calcAverage(65, 54, 49);

console.log(
    `Score of Dolphins: ${DolphinsScore} and score of Koalas: ${koalasScore}`
  );

const checkWinner = (avgDolphins, avgKoalas) => {
  avgDolphins >= 2 * avgKoalas
    ? console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    : avgKoalas >= 2 * avgDolphins
    ? console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    : console.log("No team win");
};

checkWinner(DolphinsScore, koalasScore);

// Data 2
DolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(
    `Score of Dolphins: ${DolphinsScore} and score of Koalas: ${koalasScore}`
  );

checkWinner(DolphinsScore, koalasScore);
