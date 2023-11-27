let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0]);

function sorted(a, b)
{
  let [a1, a2] = a.split(' ').map(Number);
  let [b1, b2] = b.split(' ').map(Number);

  let c1 = a1 - b1;
  if (c1 != 0)
      return c1;
  let c2 = a2 - b2;
  return c2;
}

let arr = [];
for (let i = 1; i <= N; i++)
{
  arr.push(input[i]);
}
arr.sort(sorted);
console.log(arr.join('\n'));