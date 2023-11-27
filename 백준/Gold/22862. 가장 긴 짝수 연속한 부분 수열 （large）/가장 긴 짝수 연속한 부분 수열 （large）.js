let input = require('fs').readFileSync('/dev/stdin');
let lines = input.toString().split('\n');

let [n, k] = lines[0].split(' ').map(Number);
let arr = lines[1].split(' ').map(Number);

let res = 0;
let cnt = 0;
for (let i = 0, j = 0; i < n; i+=1) {
  while (j < n) {
    if (arr[j] % 2 == 0) j += 1;
    else {
      if (cnt == k) break;
      cnt += 1;
      j += 1;
    }
  }
  res = Math.max(res, j - i - cnt);
  if (arr[i] % 2 == 1) cnt -= 1;
}
console.log(res);
