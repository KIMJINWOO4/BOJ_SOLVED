let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i += 1) {
  arr.push(Number(input[i]));
}

let dp = new Array(n + 1).fill(0);

dp[1] = arr[0];
dp[2] = Math.max(arr[0] + arr[1], arr[1]);
dp[3] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 4; i <= n; i += 1) {
  dp[i] = Math.max(dp[i - 2] + arr[i - 1], dp[i - 3] + arr[i - 2] + arr[i - 1]);
}

console.log(dp[n]);