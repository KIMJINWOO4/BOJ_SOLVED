let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let res = Number(input[0]) - Number(input[0]) * (10/110);
console.log(res);