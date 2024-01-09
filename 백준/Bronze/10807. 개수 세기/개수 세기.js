let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[1].split(' ').map(Number);
let n = Number(input[2]);
let res = 0;

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] === n) res += 1;
}

console.log(res);