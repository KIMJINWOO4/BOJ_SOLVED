let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let dp = new Array(n + 1);

for (let i = 0; i <= n; i++) {
  dp[i] = new Array(3).fill(0);
}

dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;

for (let i = 2; i <= n; i += 1) {
  dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2]) % 9901;
  dp[i][1] = (dp[i-1][0] + dp[i-1][2]) % 9901;
  dp[i][2] = (dp[i-1][0] + dp[i-1][1]) % 9901;
}

console.log((dp[n][0] + dp[n][1] + dp[n][2]) % 9901);