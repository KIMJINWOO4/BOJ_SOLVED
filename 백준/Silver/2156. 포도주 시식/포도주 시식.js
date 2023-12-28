let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];
let dp = new Array(n + 1).fill(0);
arr.push(0);
for (let i = 1; i <= n; i += 1)
  arr.push(Number(input[i]));

dp[1] = arr[1];
if (n >= 2) dp[2] = arr[1] + arr[2];
if (n >= 3) dp[3] = Math.max(arr[3] + arr[2], arr[1] + arr[3], arr[1] + arr[2]);

for (let i = 4; i <= n; i += 1)
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);

console.log(Math.max.apply(null, dp));