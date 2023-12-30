let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let dp = new Array(n + 1).fill(null).map(() => new Array(10).fill(0));

for (let j = 0; j <= 9; j++) dp[1][j] = 1;

for (let i = 2; i <= n; i += 1) {
  for (let j = 0; j <= 9; j += 1) {
    for (let k = 0; k <= j; k += 1) {
      dp[i][j] += dp[i - 1][k];
      dp[i][j] %= 10007;
    }
  }
}

let sum = 0;
for (let j = 0; j <= 9; j += 1) sum += dp[n][j];

console.log(sum % 10007);