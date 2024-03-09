let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = 'WelcomeToSMUPC';

console.log(a[(Number(input[0]) - 1) % a.length]);
