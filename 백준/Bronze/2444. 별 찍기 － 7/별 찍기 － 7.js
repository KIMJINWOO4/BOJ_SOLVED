let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let j = 1;
for (let i = 1; i <= n; i += 1) 
{
  console.log(' '.repeat(n - i) + '*'.repeat(j));
  j += 2;
}
j = 1;
for (let i = n * 2 - 3; i >= 1; i -= 2) 
{
  console.log(' '.repeat(j) + '*'.repeat(i));
  j += 1;
}