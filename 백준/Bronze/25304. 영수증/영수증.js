let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let m = Number(input[1]);
let res = 0;
for (let i = 2; i < m + 2; i += 1)
{
  let [a, b] = input[i].split(' ').map(Number);
  res += a * b;
}

if (res == n)
  console.log("Yes");
else
  console.log("No");