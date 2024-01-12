let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = [];
for (let i = 0; i < 28; i += 1)
  arr.push(Number(input[i]));
arr.sort((a, b) => a - b);
let res = 0;

for (let i = 0 ; i < 30; i += 1) {
  if (arr.includes(i + 1)) continue;
  else {
    console.log(i + 1);
    res++;
  }
  if (res === 2) break;
}