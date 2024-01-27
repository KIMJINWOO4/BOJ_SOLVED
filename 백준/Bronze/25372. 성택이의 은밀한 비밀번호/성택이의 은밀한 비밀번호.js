let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
for (let i = 1; i <= n; i += 1) {
  if (input[i].length >= 6 && input[i].length <= 9)
    console.log('yes');
  else console.log('no');
}