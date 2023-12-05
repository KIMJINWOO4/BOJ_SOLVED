let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i += 1)
  arr.push(input[i].split(' ').map(Number));

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

function combination(m, n) {
  return factorial(m) / (factorial(n) * factorial(m - n));
}

function countBridges(testCases) {
  for (let i = 0; i < testCases.length; i++) {
      let [n, m] = testCases[i];
      console.log(Math.round(combination(m, n)));
  }
}

countBridges(arr);