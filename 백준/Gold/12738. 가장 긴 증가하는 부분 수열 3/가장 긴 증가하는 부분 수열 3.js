let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => v.split(' ').map(Number))

let arr = input[1]

let d = [];

function lowerBound(arr, target, start, end){
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (x of arr){
  if (d[d.length - 1] < x) {
    d.push(x);
  }
  else {
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}
console.log(d.length);