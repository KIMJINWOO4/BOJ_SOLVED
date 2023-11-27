let input = require('fs').readFileSync('/dev/stdin');
let lines = input.toString().split('\n');

let [n, m] = lines[0].split(' ').map(Number);
let arr = lines[1].split(' ').map(Number);
let arr2 = lines[2].split(' ').map(Number);

let res = [];
let i = 0;
let j = 0;

while (i < n && j < m){
  if (arr[i] < arr2[j]) {
    res.push(arr[i]);
    i += 1;
  }
  else {
    res.push(arr2[j]);
    j += 1;
  }
}

while (i < n) {
  res.push(arr[i]);
  i += 1;
}

while (j < m) {
  res.push(arr2[j]);
  j += 1;
}

console.log(res.join(' '));