let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [0, ...input[1].split(' ').map(Number)];

let dp = new Array(n + 1).fill(1);
let dp2 = new Array(n + 1).fill(1);

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j < i; j += 1) {
    if (arr[j] < arr[i])
      dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

for (let i = n; i >= 1; i -= 1) {
  for (let j = n; j > i; j -= 1) {
    if (arr[j] < arr[i])
      dp2[i] = Math.max(dp2[i], dp2[j] + 1);
  }
}

let res = 1;
for (let i = 1; i <= n; i++) 
  res = Math.max(res, dp[i] + dp2[i] - 1);

console.log(res);