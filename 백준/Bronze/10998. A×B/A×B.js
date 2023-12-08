let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(Number(input[0].split(' ')[0]) * Number(input[0].split(' ')[1]));