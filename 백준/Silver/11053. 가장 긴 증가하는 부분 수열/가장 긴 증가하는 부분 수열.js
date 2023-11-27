let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

function LIS(arr) {
  let lis = [];
  let parent = new Array(n).fill(-1);

  lis.push(0);

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[lis[lis.length - 1]]) {
      parent[i] = lis[lis.length - 1];
      lis.push(i);
    } else {
      let lowerBoundIndex = lowerBound(arr, lis, arr[i]);
      lis[lowerBoundIndex] = i;
      if (lowerBoundIndex > 0) {
        parent[i] = lis[lowerBoundIndex - 1];
      }
    }
  }

  let result = [];
  let index = lis[lis.length - 1];
  while (index !== -1) {
    result.unshift(arr[index]);
    index = parent[index];
  }

  return result;
}

function lowerBound(arr, lis, target) {
  let start = 0;
  let end = lis.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[lis[mid]] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

let result = LIS(arr);

console.log(result.length);