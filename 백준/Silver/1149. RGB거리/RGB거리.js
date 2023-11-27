let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i += 1) {
  arr.push(input[i].split(' ').map(Number));
}

let dp = Array.from({length: n}, () => Array(3).fill(0));

dp[0][0] = arr[0][0];
dp[0][1] = arr[0][1];
dp[0][2] = arr[0][2];

for (let i = 1; i < n; i += 1) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
}

console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));