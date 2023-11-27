let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function countWays(n) {
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (i - 1 >= 0) {
      dp[i] += dp[i - 1];
    }
    if (i - 2 >= 0) {
      dp[i] += dp[i - 2];
    }
    if (i - 3 >= 0) {
      dp[i] += dp[i - 3];
    }
  }
  return dp[n];
}

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let t = Number(input[i]);
  console.log(countWays(t));
}