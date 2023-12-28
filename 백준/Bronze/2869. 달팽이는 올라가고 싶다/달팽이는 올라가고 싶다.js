let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b, v] = input[0].split(' ').map(Number);
if (a >= v) {
  console.log(1);
  return ;
}

let res = Math.ceil((v - b) / (a - b));

console.log(res);