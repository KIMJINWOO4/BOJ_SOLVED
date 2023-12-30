let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let dp = new Array(n + 1).fill(null).map(() => new Array(10).fill(0));

for (let j = 1; j <= 9; j++)
  dp[1][j] = 1;

for (let i = 2; i <= n; i += 1) {
  for (let j = 0; j <= 9; j += 1) {
    if (j > 0)
      dp[i][j] += dp[i - 1][j - 1];
    if (j < 9)
      dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= 1000000000;
  }
}

let result = dp[n].reduce((acc, cur) => (acc + cur) % 1000000000, 0);
console.log(result);