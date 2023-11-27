let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let d = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i] && d[i] < d[j] + 1) {
      d[i] = d[j] + 1;
    }
  }
}

let maxLength = Math.max(...d);
console.log(maxLength);
