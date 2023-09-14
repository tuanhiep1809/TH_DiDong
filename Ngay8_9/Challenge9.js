console.log("Challenge 9:");
// Test data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let x = "";
    length = arr.length;
  for (let i = 0; i < length; i++) {
    x += `... ${arr[i]}°C in ${i + 1} days `;
  }

  console.log(x);
}
console.log("Data 1:");
printForecast(data1);

console.log("Data 2:");
printForecast(data2);
