let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i += 1) {
  let arr = input[i].split(' ').map(Number);
  console.log(input[i][0]+input[i][input[i].length - 1]);
}