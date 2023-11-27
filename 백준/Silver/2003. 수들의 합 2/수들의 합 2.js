let input = require('fs').readFileSync('/dev/stdin');
let lines = input.toString().split('\n');

let [n, m] = lines[0].split(' ').map(Number);
let arr = lines[1].split(' ').map(Number);

let pos = 0;
let sum = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
  while (sum < m && pos < n) {
    sum += arr[pos];
    pos += 1;
  }
  if (sum === m) cnt += 1;
  sum -= arr[i];
}
console.log(cnt);