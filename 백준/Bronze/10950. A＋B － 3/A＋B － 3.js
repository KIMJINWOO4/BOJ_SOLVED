let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
for (let i = 1; i <= n; i += 1)
  console.log(Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]));