let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(Number(input[0]) * Number(input[1].split('')[2]));
console.log(Number(input[0]) * Number(input[1].split('')[1]));
console.log(Number(input[0]) * Number(input[1].split('')[0]));
console.log(Number(input[0]) * Number(input[1]));