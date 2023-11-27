let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [k, n] = input[0].split(' ').map(Number);
let arr = []
for (let i = 1; i <= k; i++)
  arr.push(Number(input[i]))

let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b))

let res;

while (start <= end)
  {
    let mid = parseInt((start + end) / 2)
    let cnt = 0;
    for (x of arr) cnt += parseInt(x / mid);
    if (cnt < n)
      end = mid - 1; 
    else
    {
      res = mid;
      start = mid + 1; 
    }
  }
console.log(res);