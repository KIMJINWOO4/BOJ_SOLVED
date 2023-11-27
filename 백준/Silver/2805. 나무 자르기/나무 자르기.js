let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

start = 0;
end = arr.reduce((a, b) => Math.max(a, b));

let res = 0;
while (start <= end){
  let mid = parseInt((start + end) / 2)
  let total = 0;
  for (x of arr) if (x > mid) total += x - mid;
  if (total < m) end = mid - 1;
  else {
    res = mid;
    start = mid + 1;
  }
}
console.log(res)