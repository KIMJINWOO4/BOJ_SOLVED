let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');
let [n, k] = input2[0].split(' ').map(Number);
let arr = input2[1].split(' ').map(Number);
arr.sort((a, b) => Number(a) - Number(b));
console.log(arr[k - 1]);