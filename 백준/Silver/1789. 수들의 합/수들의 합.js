let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0])

let i = 0;
let j = 0;
while (i <= n)
  {
    j++;
    i += j;
  }
console.log(j - 1);