let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

function lowerBound(arr, start, end) {
  while (start < end) {
    let cnt = 1;
    let sum = 0;
    let mid = Math.floor((start + end) / 2);
    for (let i = 0; i < arr.length; i += 1) {
      if (sum + arr[i] > mid) {
        cnt += 1;
        sum = arr[i];
      } else {
        sum += arr[i];
      }
    }
    if (cnt > m) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

console.log(lowerBound(arr, Math.max(...arr), arr.reduce((a, b) => a + b)));