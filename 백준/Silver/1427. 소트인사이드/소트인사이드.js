let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = new Array(10).fill(0)
for (let i = 0; i < input[0].length; i++)
  arr[Number(input[0][i])] += 1
let res = '';
for (let i = 9; i > -1; i--)
{
  if (arr[i] === 0)
    continue
  for (let j = 0; j < arr[i]; j++)
    res += `${i}`
}
console.log(res);