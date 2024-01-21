let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

if (input[0].length >= input[1].length) console.log('go');
else console.log('no');