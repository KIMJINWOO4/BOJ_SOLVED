let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for(let i = 1; i <= Number(input[0]); i += 1) {
  let [n, m, k] = input[i].split(" ").map(Number);
  console.log(n * (k - 1) + m);
}