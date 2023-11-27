let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, s] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let res = Infinity;
let start = 0;
let end = 0;
let sum = arr[0];

while (start < n && end < n) {
  if (sum < s) {
    end += 1;
    sum += arr[end];
  } else {
    res = Math.min(res, end - start + 1);
    sum -= arr[start];
    start += 1;
  }
}

if (res === Infinity) {
  console.log(0);
} else {
  console.log(res);
}
