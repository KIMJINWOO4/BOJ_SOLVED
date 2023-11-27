let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input[1].split(' ').map(Number)

arr.reverse();

let d = [0];

function lowerBound(arr, target, start, end){
  while (start < end) {
    let mid = parseInt((start + end) / 2);
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
console.log(arr.length - (d.length - 1));