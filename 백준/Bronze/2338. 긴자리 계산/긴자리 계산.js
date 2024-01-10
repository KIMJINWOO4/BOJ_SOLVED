let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log((BigInt(input[0]) + BigInt(input[1])).toString());
console.log((BigInt(input[0]) - BigInt(input[1])).toString());
console.log((BigInt(input[0]) * BigInt(input[1])).toString());