let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
for (let i = 1; i <= n; i += 1)
{
  let [a, b] = input[i].split(' ').map(Number);
  let res = a + b;
  console.log('Case #' + i +': ' + res);
}