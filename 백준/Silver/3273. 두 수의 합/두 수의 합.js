let input = require('fs').readFileSync('/dev/stdin');
let lines = input.toString().split('\n');

let n = Number(lines[0]);
let arr = lines[1].split(' ').map(Number);
let x = Number(lines[2]);

arr.sort((a, b) => a - b);

let res = 0;
let start = 0;
let end = n - 1;

while (true) {
  while(end > 0 && arr[start] + arr[end] > x){ end -= 1;}
  if (arr[start] + arr[end] === x) {
    end -= 1;
    res += 1;
  }
  start += 1;
  if (start >= end) break;
}

console.log(res);