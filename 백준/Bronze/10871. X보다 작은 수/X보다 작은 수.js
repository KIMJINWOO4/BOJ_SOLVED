let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, x] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let res = [];

for (let i = 0; i < n; i += 1)
{
  if (arr[i] < x)
    res.push(arr[i]);
}
console.log(res.join(' '));