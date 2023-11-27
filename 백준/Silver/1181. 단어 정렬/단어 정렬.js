let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0]);

function sorted(a, b)
{
  if (a.length != b.length)
    return a.length - b.length;
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}

let arr = [];
for (let i = 1; i <= N; i++)
{
  arr.push(input[i]);
}
arr = [...new Set(arr)];
arr.sort(sorted);
console.log(arr.join('\n'));