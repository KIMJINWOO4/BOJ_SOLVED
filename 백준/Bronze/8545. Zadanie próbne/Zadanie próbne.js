let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let res = input[0].split('');
console.log(res.reverse().join(''));