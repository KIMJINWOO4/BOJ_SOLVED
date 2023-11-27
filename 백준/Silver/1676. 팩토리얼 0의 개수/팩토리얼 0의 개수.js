let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

function countZeros(n) {
  let cnt = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    cnt += Math.floor(n / i);
  }
  return cnt;
}

let result = countZeros(n);
console.log(result);
