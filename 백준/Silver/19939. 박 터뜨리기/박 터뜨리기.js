let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, k] = input[0].split(' ').map(Number);

let sum = 0;
for (let i = 1; i < k + 1; i++)
  sum += i;
if (sum > n)
  console.log(-1)
else {
  n -= sum;
  if (n % k === 0) console.log(k - 1);
  else console.log(k)
}