let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input2[0]);
let arr3 = [];
for(let i = 1; i <= n; i++)
  arr3.push(parseInt(input2[i]));
arr3.sort((a, b) => Number(b) - Number(a));
console.log(arr3.join('\n'));