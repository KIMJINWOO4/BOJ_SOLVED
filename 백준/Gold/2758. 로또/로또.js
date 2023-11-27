let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0]);
let ins = [];
for (let i = 1; i <= n; i++)
  ins.push(input[i].split(' ').map(Number));
let arr = Array.from(Array(11).fill(0), () => Array(2001).fill(0))
for (let i = 0; i < 2001; i++)
  arr[0][i] = 1;

for (let i = 1; i < 11; i++){
  for (let j = 1; j < 2001; j++)
    arr[i][j] = arr[i][j-1] + arr[i-1][parseInt(j/2)];
}

for(let i = 0;i < n; i++)
  console.log(arr[ins[i][0]][ins[i][1]])
