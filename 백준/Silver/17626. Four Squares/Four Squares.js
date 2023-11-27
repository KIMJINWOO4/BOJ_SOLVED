let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);