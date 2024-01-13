let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let res = '';
for (let i = 1; i <= Number(input[0]); i += 1) res += i + '\n';

console.log(res);