let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let N = Number(input[0])
let arr = []

for (let i = 1; i <= N; i++)
  arr.push([Number(input[i].split(' ')[0]), input[i].split(' ')[1]])
arr.sort((a, b) => {
  if (a[0] > b[0])
    return 1;
  else if (a[0] < b[0])
    return -1;
  return 0;
})

let res = '';
for (let i = 0; i < N; i++)
  res += `${arr[i][0]} ${arr[i][1]}\n`
console.log(res)