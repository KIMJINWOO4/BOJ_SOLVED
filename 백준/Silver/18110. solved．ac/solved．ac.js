let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
if (n == 0) {
    console.log(0);
    return ;
}
for(let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let avgCut = Math.round(n * 0.15);
arr.sort((a, b) => a - b);

let startIndex = avgCut;
let endIndex = n - avgCut;

let avg = arr.slice(startIndex, endIndex);

let average = avg.reduce(((a, b) => a + b), 0) / (endIndex - startIndex);
let roundedAverage = Math.round(average);

console.log(roundedAverage);