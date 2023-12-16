let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let dp = new Array(Number(input[0]) + 1);

dp[0] = BigInt(0);
dp[1] = BigInt(1);
for (let i = 2; i <= Number(input[0]); i += 1)
  dp[i] = dp[i - 1] + dp[i - 2];

console.log(dp[Number(input[0])].toString());