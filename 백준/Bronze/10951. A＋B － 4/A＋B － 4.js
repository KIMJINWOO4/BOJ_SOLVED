let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i += 1)
{
  let [a, b] = input[i].split(' ').map(Number);
  let res = a + b;
  console.log(res);
}