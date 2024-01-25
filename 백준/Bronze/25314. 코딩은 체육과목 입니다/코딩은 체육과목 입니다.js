let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let res = '';

let n = Number(input[0]);
n -= 4;
while (n > 0) {
  res += 'long ';
  n -= 4;
}
console.log(res + 'long int');