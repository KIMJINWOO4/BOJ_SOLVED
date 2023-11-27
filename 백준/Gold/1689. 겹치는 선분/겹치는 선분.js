let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = new Array(2 * N).fill(0);


for (let i = 1; i <= N; i++)
  {
    arr[i - 1] = [Number(input[i].split(' ')[0]), 1];
    arr[i - 1 + N] = [Number(input[i].split(' ')[1]), -1];
  }

arr.sort((a, b)=> {
  if(a[0] < b[0])
    return -1;
  else if (a[0] > b[0])
    return 1;
  else {
    if (a[1] < b[1])
      return -1;
    else if (a[1] > b[1])
      return 1;
    else
      return 0;
  }
});

let cnt = 0;
let ans = [];
for (let i = 0; i < arr.length; i++)
  {
    cnt += arr[i][1];
    ans.push(cnt)
  }
console.log(Math.max(...ans))
