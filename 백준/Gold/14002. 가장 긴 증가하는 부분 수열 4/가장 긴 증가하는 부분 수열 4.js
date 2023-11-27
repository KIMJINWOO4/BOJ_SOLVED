let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let d = [];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

let len = 0;
let indexArr = [];

for (let i = 0; i < n; i++) {
  if (len === 0 || d[len - 1] < arr[i]) {
    d[len] = arr[i];
    indexArr[i] = len;
    len += 1;
  } else {
    let index = lowerBound(d, arr[i], 0, len);
    d[index] = arr[i];
    indexArr[i] = index;
  }
}

console.log(len);

let result = [];
for (let i = n - 1; i >= 0; i--) {
  if (indexArr[i] === len - 1) {
    result.push(arr[i]);
    len -= 1;
  }
}

console.log(result.reverse().join(' '));
