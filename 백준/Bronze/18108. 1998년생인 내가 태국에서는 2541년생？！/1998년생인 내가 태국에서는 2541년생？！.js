let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(Number(input[0]) - 543);