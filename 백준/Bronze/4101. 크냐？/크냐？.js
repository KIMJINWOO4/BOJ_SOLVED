let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i += 1) {
  let [n, m] = input[i].split(' ').map(Number);
  if (n === 0 && m === 0) break;
  if (n > m) console.log("Yes");
  else console.log("No");
}