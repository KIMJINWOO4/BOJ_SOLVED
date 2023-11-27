let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

function fillNxN(n) {
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  return dp[n];
}

let res = fillNxN(n);
console.log(res);