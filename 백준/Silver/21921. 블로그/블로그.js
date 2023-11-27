let input = require('fs').readFileSync('/dev/stdin');
let lines = input.toString().split('\n');

let [n, x] = lines[0].split(' ').map(Number);
let arr = [0, ...lines[1].split(' ').map(Number)];

let res = 0;
for (let i = 1; i <= n; i += 1) {
  if (i <= x) res += arr[i];
}

let maxPos = res;
let cnt = 1;

let leftPos = 1;
let rightPos = x;
while (true) {
  leftPos += 1;
  rightPos += 1;

  if (rightPos > n) break;
  res = res + arr[rightPos] - arr[leftPos - 1];
  if (res == maxPos) cnt += 1; 
  else if (res > maxPos) {
    cnt = 1;
    maxPos = res;
  }
}

if (maxPos != 0) {
  console.log(maxPos);
  console.log(cnt);
  return ;
}
console.log('SAD');
