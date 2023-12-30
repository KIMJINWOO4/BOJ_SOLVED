let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let dp = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= i; j += 1)
    dp[i] = Math.max(dp[i], dp[i - j] + arr[j - 1]);
}

console.log(dp[n]);