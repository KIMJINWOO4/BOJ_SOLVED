let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let lis = [];
let parent = new Array(n).fill(-1);

function LIS(arr) {
  for (let i = 0; i < n; i++) {
    let pos = lowerBound(arr[i]);
    if (pos === lis.length)
      lis.push(i);
    else
      lis[pos] = i;
    parent[i] = pos > 0 ? lis[pos - 1] : -1;
  }
  return reconstructLIS();
}

function lowerBound(target) {
  let start = 0;
  let end = lis.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[lis[mid]] < target)
      start = mid + 1;
    else
      end = mid;
  }
  return start;
}

function reconstructLIS() {
  let index = lis[lis.length - 1];
  let sequence = [];
  while (index !== -1) {
    sequence.push(arr[index]);
    index = parent[index];
  }
  return sequence.reverse();
}

let result = LIS(arr);

console.log(result.length);
console.log(result.join(' '));