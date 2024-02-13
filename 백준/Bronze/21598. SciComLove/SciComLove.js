let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let one = 'SciComLove';
let two = 'SciComLove\nSciComLove';
if (Number(input[0]) === 1) console.log(one);
else console.log(two);