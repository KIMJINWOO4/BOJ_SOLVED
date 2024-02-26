let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(Number(input[1]) - Number(input[0]));