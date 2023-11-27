let input = require('fs').readFileSync('/dev/stdin');
let lines = input.toString().split('\n');

let n = Number(lines[0]);
let arr = lines[1].split(' ').map(Number);
let m = Number(lines[2]);

let sum = 0;
let prevSum = [];
prevSum.push(0);

for (let i of arr) {
  sum += i;
  prevSum.push(sum);
}

let res = '';
for (let line = 3; line < m + 3; line += 1) {
  let [i, j] = lines[line].split(' ').map(Number);
  res += (prevSum[j] - prevSum[i - 1]) + '\n';
}

console.log(res);