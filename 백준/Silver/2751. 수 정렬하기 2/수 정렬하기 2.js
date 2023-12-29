let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i += 1)
  arr.push(Number(input[i]));
arr.sort((a, b) => a - b);
console.log(arr.join('\n'));